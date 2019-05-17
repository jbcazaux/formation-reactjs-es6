import React, { useEffect, useState } from 'react'
import Item from './Item'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'
import { setItems, addItem } from './actions/items'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  items: state.items,
})

const ShoppingList = ({ title, items, addItem, setItems }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  const handleAddItem = event => {
    event.preventDefault()
    addItem(new Item(new Date().getTime(), newItemLabel, newItemPrice))
    setNewItemLabel('')
    setNewItemPrice(0)
  }

  useEffect(() => {
    setItems([new Item(1, 'pain', 0.95), new Item(2, 'gel douche', 2.85), new Item(3, 'cahier à spirales', 1.2)])
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input type="text" placeholder="item" onChange={e => setNewItemLabel(e.target.value)} value={newItemLabel} />
        <input type="number" onChange={e => setNewItemPrice(parseFloat(e.target.value))} value={newItemPrice} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default connect(
  mapStateToProps,
  { setItems, addItem }
)(ShoppingList)

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}
