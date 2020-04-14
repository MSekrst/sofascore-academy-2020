import bread from '../images/bread.jpg'
import flour from '../images/flour.jpeg'
import milk from '../images/milk.jpg'
import oil from '../images/oil.jpg'
import sugar from '../images/sugar.jpg'
import water from '../images/water.jpg'

// TODO: remove unit

export const items = [
  {
    id: 1,
    name: 'Bread',
    price: 6.99,
    image: bread,
    description: 'Plain white bread',
    unit: 'piece',
  },
  {
    id: 2,
    name: 'Milk',
    price: 4.59,
    image: milk,
    description: 'Milk carton',
    unit: 'liter',
  },
  {
    id: 3,
    name: 'Olive oil',
    price: 59.99,
    image: oil,
    description: 'Extra virgin olive oil',
    unit: 'liter',
  },
  {
    id: 4,
    name: 'Flour',
    price: 5.99,
    image: flour,
    description: 'Flour type 00',
    unit: 'piece',
  },
  {
    id: 5,
    name: 'Sugar',
    price: 6.99,
    image: sugar,
    description: 'White sugar',
    unit: 'kilogram',
  },
  {
    id: 6,
    name: 'Water',
    price: 4.99,
    image: water,
    description: 'Bottled water',
    unit: 'liter',
  },
]
