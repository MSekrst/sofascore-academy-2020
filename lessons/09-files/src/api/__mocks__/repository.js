export const mockedFruit = ['Apple', 'Pineapple', 'Pear']

export function getFruit() {
  return Promise.resolve(mockedFruit)
}
