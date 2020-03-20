// TODO: add cache layer for all API calls

/**
 * Used to cache pokemon list for each call to avoid unnecessary API calls.
 *
 * IMPORTANT: this is global variable visible from other files!s
 */
const pokemonListCache = {}

/**
 * Fetches and returns Pokemon from given URL. If fetch fails handles error and returns `null`.
 * Utilizes strict caching.
 *
 * @param {string} url URL for fetching Pokemon
 */
async function getPokemonList(url) {
  // if call exists in cache return it
  if (pokemonListCache[url]) {
    return pokemonListCache[url]
  }

  try {
    const response = await fetch(url)

    if (response.status > 399) {
      throw Error(`Pokemon API error (${response.status} - ${url})`)
    }

    const pokemon = await response.json()

    // save response in cache for later usage
    pokemonListCache[url] = pokemon

    return pokemon
  } catch (error) {
    showError(error)
    return null
  }
}
