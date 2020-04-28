const fruit = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Pear' },
  { id: 4, name: 'Strawberry' },
  { id: 5, name: 'Pineapple' },
  { id: 6, name: 'Blueberry' },
  { id: 7, name: 'Banana' },
]

function fakeFetch(url) {
  return new Promise(resolve => {
    const timeout = Math.random() * 500 + 50 // random timeout between 50 and 550ms

    setTimeout(() => {
      resolve({ statusCode: 200, json: () => Promise.resolve(fruit) })
    }, timeout)
  })
}

// fake fetch calls because there is no backend - fakeFetch behaves just like the real one
window.fetch = fakeFetch
