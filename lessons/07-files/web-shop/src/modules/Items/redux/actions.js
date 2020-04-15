export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const ADD_UNAVAILABLE_ITEM = 'ADD_UNAVAILABLE_ITEM'
export const REMOVE_UNAVAILABLE_ITEM = 'REMOVE_UNAVAILABLE_ITEM'

export const SET_ITEMS = 'SET_ITEMS'

export const addItemToCart = id => ({ type: ADD_CART_ITEM, id })
export const removeItemFromCart = id => ({ type: REMOVE_CART_ITEM, id })
export const addUnavailable = id => ({ type: ADD_UNAVAILABLE_ITEM, id })
export const removeUnavailable = id => ({ type: REMOVE_UNAVAILABLE_ITEM, id })

export const setItems = items => ({ type: SET_ITEMS, items })
