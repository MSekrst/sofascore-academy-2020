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

/**
 * Returns number of cards that fit in single row. Single card width is encapsulated.
 * Will handle error if selector is not in the DOM.
 *
 * @param {string} selector
 */
function getNumberOfCardsInRow(selector) {
  // width needed to render one card
  const CARD_WIDTH = 248

  const element = document.querySelector(selector)

  if (!element) {
    showError('No element that matches provided selector in the DOM')
    return null
  }

  return Math.floor(element.getBoundingClientRect().width / CARD_WIDTH)
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
function renderPokemonList(pokemonList) {
  const deleteIcons = []

  /**
   * Removes clicked pokemon from the list
   *
   * @param {MouseEvent} event
   */
  function removeFromList(event) {
    const deletedName = event.currentTarget.name

    allPokemonList = allPokemonList.filter(pokemon => pokemon.name !== deletedName)

    renderPokemonList(allPokemonList)
  }

  let pokemonMarkupArray = pokemonList.map(({ name, url }) => {
    // dirty hack to get id from url to avoid calling pokemon details route :)
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
      `<div id="${getCardName(SHOW_MORE_ID)}" class="card card-more">
      <h3 class="card-title card-show-more">
        <i class="material-icons">add</i>
        <span class="mL8">Show more</span>
      </h3>
    </div>`
    )
  }

  const cardsPerRow = getNumberOfCardsInRow(SELECTORS.list)
  const cardsMissingForFullRow = pokemonMarkupArray.length % cardsPerRow

  // if last row isn't full fill it
  if (cardsMissingForFullRow) {
    const emptyCardMarkup = `<div class="card card-empty"></div>`

    for (let n = cardsMissingForFullRow; n < cardsPerRow; n += 1) {
      pokemonMarkupArray.push(emptyCardMarkup)
    }
  }

  render(SELECTORS.list, pokemonMarkupArray.join(''))

  deleteIcons.forEach(iconId => {
    const pokemonDeleteButton = document.getElementById(iconId)

    if (pokemonDeleteButton) {
      pokemonDeleteButton.addEventListener('click', removeFromList)
    }
  })

  if (nextPokemonPage) {
    const showMoreButton = document.getElementById(getCardName(SHOW_MORE_ID))

    if (showMoreButton) {
      showMoreButton.addEventListener('click', getPokemon.bind(null, undefined))
    }
  }
}

/**
 * Gets pokemon from next URL and sets global flags.
 * Renders all pokemon from the list.
 */
async function getPokemon(url = nextPokemonPage) {
  if (!url) {
    showError(Error('No pokemon left :('))
    return
  }

  let pokemonList = await getPokemonList(url)

  if (!pokemonList) {
    return
  }

  allPokemonList.push(...pokemonList.results)
  nextPokemonPage = pokemonList.next

  renderPokemonList(allPokemonList)
}

getPokemon()
