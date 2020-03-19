const BASE_URL = 'https://pokeapi.co/api/va2/pokemon'

const SELECTORS = {
  error: '#error',
}

/**
 * Display error message for user and print actual error into the console.
 *
 * @param {Error} error
 */
function showError(error) {
  console.error(error)

  const ICON_ID = 'icon-close'

  render(SELECTORS.error, `<p class="error-message">Something went wrong</p><i id="${ICON_ID}" class="material-icons error-close">close</i>`)

  const closeIcon = document.getElementById(ICON_ID)
  closeIcon.addEventListener('click', close)

  function close() {
    closeIcon.removeEventListener('click', close)
    render(SELECTORS.error, '')
  }

  // setTimeout(close, 5000)
}

/**
 * Fetches and returns Pokemon from given URL. If fetch fails handles error and returns `null`.
 *
 * @param {string} url URL for fetching Pokemon
 */
async function getPokemon(url) {
  try {
    const response = await fetch(url)
    const pokemon = await response.json()

    return pokemon
  } catch (error) {
    showError(error)
    return null
  }
}

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

/**
 * This is async wrapper, because global await is not supported yet (we can't outside function).
 * So we wrap async code to be able to call await.
 */
async function start() {
  console.log(await getPokemon(BASE_URL))

  render('#insert', `<h1>POKEMON</h1>`)
}

start()
