/**
 * Service for persisting items in localStorage. Storage manipulation is async.
 * All items should have unique `id` property, to be able to distinguish unique items.
 * `storageKey` is key used in storage.
 */

export class ListStorage {
  constructor(storageKey) {
    this.storageKey = storageKey

    this.writeToStorage = this.writeToStorage.bind(this)
    this.setFromStorage = this.setFromStorage.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)

    this.setFromStorage(storageKey)
  }

  /**
   * Writes current items to storage. Internal use only.
   */
  writeToStorage() {
    return (localStorage[this.storageKey] = JSON.stringify(this.items))
  }

  /**
   * Reads current items from storage. Internal use only.
   */
  setFromStorage() {
    const storageItems = localStorage[this.storageKey]
    this.items = storageItems ? JSON.parse(storageItems) : []
  }

  /**
   * Adds item to current items. Item will be added if it has unique id property.
   * Items are persisted after adding is successful.
   *
   * @param {any} item
   */
  add(item) {
    return new Promise(resolve => {
      if (!this.items.some(presentItem => presentItem.id === item.id)) {
        this.items.push(item)
        this.writeToStorage()
      }
      resolve()
    })
  }

  /**
   * Item with `id` property or only `id` that should be removed from storage.
   * Items are persisted after removal is successful.
   *
   * @param {any} itemForRemoval
   */
  remove(itemForRemoval) {
    return new Promise(resolve => {
      const id = itemForRemoval.id || itemForRemoval
      this.items.filter(presentItem => presentItem.id !== id)
      this.writeToStorage()

      resolve()
    })
  }

  /**
   * Returns all items.
   */
  getAll() {
    return new Promise(resolve => {
      resolve(this.items)
    })
  }
}
