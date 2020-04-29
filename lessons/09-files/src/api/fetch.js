const fruit = ['Apple', 'Orange', 'Pear', 'Strawberry', 'Pineapple', 'Blueberry', 'Banana']

function fakeFetch() {
  return new Promise(resolve => {
    const timeout = Math.random() * 500 + 50 // random timeout between 50 and 550ms

    setTimeout(() => {
      resolve({ statusCode: 200, json: () => Promise.resolve(fruit) })
    }, timeout)
  })
}

// fake fetch calls because there is no backend - fakeFetch behaves just like the real one
window.fetch = fakeFetch
