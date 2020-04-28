export function getFruit() {
  return Promise.resolve([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Pineapple' },
    { id: 3, name: 'Pear' },
  ])
}
