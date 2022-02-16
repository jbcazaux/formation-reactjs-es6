import Item from './Item'

const ShoppingItem = ({ item }) => (
  <li>
    <span>{item.label}</span>:<span>{item.price}€</span>
  </li>
)

ShoppingItem.propTypes = {
  item: Item.propTypes.isRequired,
}

export default ShoppingItem
