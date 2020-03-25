/**
 * Inserts provided `markup` into DOM element with provided `selector`. If selector doesn't match any DOM node, error is handled.
 *
 * @param {string} selector selector for any DOM element
 * @param {string} markup markup to be inserted into DOM element with provided selector
 */
function render(selector, markup) {
  const element = document.querySelector(selector)

  if (!element) {
    showError(Error('No element for provided selector found'))
    return
  }

  element.innerHTML = markup
}
