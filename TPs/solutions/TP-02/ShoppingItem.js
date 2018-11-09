import React from 'react'
import PropTypes from 'prop-types'

const ShoppingItem = ({ item }) => (
  <li>
    <span>{item.label}</span>:<span>{item.price}€</span>
  </li>
)

export default ShoppingItem

ShoppingItem.propTypes = {
  item: PropTypes.shape({ label: PropTypes.string.isRequired, price: PropTypes.number.isRequired }).isRequired,
}
