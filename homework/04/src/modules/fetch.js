import { flags } from '../const'
import { ListStorage } from './storage'

const cachedJokes = new ListStorage('jokes')

/**
 * Fetches data from provided `url`.
 * Returns fetched and decoded JSON data in following format: `{ data: YOUR_DATA }`
 * If error is thrown or response has error status code returns `{ error: ERROR_OBJECT }`.
 *
 * @param {string} url GET request URL
 */
function getJson(url) {
  return new Promise((resolve, reject) => {
    function errorHandler(error) {
      reject({ error })
    }

    fetch(url)
      .then(response => {
        if (response.ok) {
          response
            .json()
            .then(decodedData => {
              resolve({ data: decodedData })
            })
            .catch(errorHandler)
        } else {
          errorHandler(Error(response.statusText))
        }
      })
      .catch(errorHandler)
  })
}

/**
 * Receives URL options and formats URL with provided `options.`
 */
function generateUrl({ category, blacklist }) {
  const query = blacklist.length ? `/?blacklistFlags=${blacklist.join()}` : ''

  return `https://sv443.net/jokeapi/v2/joke/${category}${query}`
}

const defaultOptions = { category: 'Any', blacklist: flags }
/**
 * Fetches random joke. If error occur returns `null`, else returns joke.
 *
 * @returns {null | Object}
 */
export async function fetchJoke(options = {}) {
  const { data, error } = await getJson(generateUrl({ ...defaultOptions, ...options }))

  if (error) {
    return null
  }

  cachedJokes.add(data)

  return data
}
