const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

function getPokemonImageURL(pokemonId) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
}

// HTML selectors
const SELECTORS = {
  error: '#error',
  list: '#pokemon',
}

async function renderPokemonList(pokemonList) {
  const deleteIcons = []

  /**
   * Removes clicked pokemon from the list
   *
   * @param {MouseEvent} event
   */
  function removeFromList(event) {
    const deletedName = event.currentTarget.name
    const removedElement = document.getElementById(`card-${deletedName}`)
    removedElement.setAttribute('style', 'display: none;')
  }

  let pokemonMarkupArray = pokemonList.results.map(({ name, url }) => {
    const id = url.match(/\/pokemon\/(\d+)\//)[1]

    // TODO: get pokemon info to render behind card
    // const pokemonInfo = getPokemonInfo(url)

    const deleteId = `delete-${name}`
    deleteIcons.push(deleteId)

    return `<div id="card-${name}" class="card">
      <img class="card-image" alt="${name}" src="${getPokemonImageURL(id)}" />
      <h3 class="card-title">
        ${name}
        <button class="card-delete primary-background primary-color" name="${name}" id="${deleteId}"><i class="material-icons">delete</i></button>
      </h3>
    </div>`
  })

  render(SELECTORS.list, pokemonMarkupArray.join('<br />'))

  deleteIcons.forEach(iconId => {
    const element = document.getElementById(iconId)
    element.addEventListener('click', removeFromList)
  })
}

/**
 * This is async wrapper, because global await is not supported yet (we can't outside function).
 * So we wrap async code to be able to call await.
 */
async function start() {
  let pokemonList = await getPokemonList(BASE_URL)
  renderPokemonList(pokemonList)
}

start()
