import { ItemPropTypes } from './Item'

const ShoppingItem = ({ item }) => (
  <li>
    <span>{item.label}</span>:<span>{item.price}€</span>
  </li>
)

ShoppingItem.propTypes = {
  item: ItemPropTypes.isRequired,
}

export default ShoppingItem
