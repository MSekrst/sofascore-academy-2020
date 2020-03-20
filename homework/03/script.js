const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

// HTML selectors
const SELECTORS = {
  error: '#error',
  list: '#pokemon',
}

/**
 * Returns URL with picture for pokemon with provided `pokemonId`.
 *
 * @param {number} pokemonId
 */
function getPokemonImageURL(pokemonId) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
}

/**
 * Returns card name used as each card id.
 */
function getCardName(name) {
  return `card-${name}`
}

// array containing all pokemon for preview
let allPokemonList = []
// should list render show more card
let nextPokemonPage = BASE_URL

/**
 * Render pokemon from provided list.
 * Function takes care of rendering and adding event listeners. Also adds show more card if more pokemon available.
 *
 * @param {Array} pokemonList
 */
async function renderPokemonList(pokemonList) {
  const deleteIcons = []

  /**
   * Removes clicked pokemon from the list
   *
   * @param {MouseEvent} event
   */
  function removeFromList(event) {
    const deletedName = event.currentTarget.name
    const removedElement = document.getElementById(getCardName(deletedName))
    removedElement.setAttribute('style', 'display: none;')

    allPokemonList = allPokemonList.filter(pokemon => pokemon.name !== deletedName)
  }

  let pokemonMarkupArray = pokemonList.map(({ name, url }) => {
    const id = url.match(/\/pokemon\/(\d+)\//)[1]

    const deleteId = `delete-${name}`
    deleteIcons.push(deleteId)

    return `<div id="${getCardName(name)}" class="card">
      <img class="card-image" alt="${name}" src="${getPokemonImageURL(id)}" />
      <h3 class="card-title">
        ${name}
        <button class="card-delete primary-background primary-color" name="${name}" id="${deleteId}"><i class="material-icons">delete</i></button>
      </h3>
    </div>`
  })

  const SHOW_MORE_ID = 'show-more'

  if (nextPokemonPage) {
    pokemonMarkupArray.push(
      `<div id="${getCardName(SHOW_MORE_ID)}" class="card">
      <h3 class="card-title card-show-more">
        <i class="material-icons">add</i>
        <span class="mL8">Show more</span>
      </h3>
    </div>`
    )
  }

  render(SELECTORS.list, pokemonMarkupArray.join('<br />'))

  deleteIcons.forEach(iconId => {
    const element = document.getElementById(iconId)
    element.addEventListener('click', removeFromList)
  })

  if (nextPokemonPage) {
    const showMoreCard = document.getElementById(getCardName(SHOW_MORE_ID))
    showMoreCard.addEventListener('click', getPokemon)
  }
}

/**
 * This is async wrapper, because global await is not supported yet (we can't outside function).
 * So we wrap async code to be able to call await.
 */
async function getPokemon() {
  if (!nextPokemonPage) {
    showError(Error('No pokemon left :('))
    return
  }

  let pokemonList = await getPokemonList(nextPokemonPage)

  if (!pokemonList) {
    return
  }

  allPokemonList.push(...pokemonList.results)
  nextPokemonPage = pokemonList.next

  renderPokemonList(allPokemonList)
}

getPokemon()
