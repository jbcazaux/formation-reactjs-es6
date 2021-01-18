import PropTypes from 'prop-types'

const ShoppingItem = ({ item }) => (
  <li>
    <span>{item.label}</span>:<span>{item.price}€</span>
  </li>
)

ShoppingItem.propTypes = {
  item: PropTypes.shape({ label: PropTypes.string.isRequired, price: PropTypes.number.isRequired }).isRequired,
}

export default ShoppingItem
