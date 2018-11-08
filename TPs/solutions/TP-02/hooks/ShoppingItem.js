import React from 'react'

const ShoppingItem = ({ item }) => (
  <li>
    <span>{item.label}</span>:<span>{item.price}€</span>
  </li>
)

export default ShoppingItem
