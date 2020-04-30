import './fetch'

export async function getFruit() {
  try {
    const response = await fetch('/all')

    if (response.statusCode < 400) {
      const data = await response.json()

      return data
    }
  } catch (e) {
    return { error: 'Bad request' }
  }
}
