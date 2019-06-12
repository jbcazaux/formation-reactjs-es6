import React, { useEffect, useState } from 'react'
import Item from './Item'
import ShoppingItem from './ShoppingItem'
import { fetchItems, addItemWithVTA } from './actions/items'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const ShoppingList = ({ title, items, fetchItems, addItemWithTVA }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  useEffect(() => {
    fetchItems()
  }, [])

  const createNewItem = e => {
    e.preventDefault()
    addItemWithTVA(new Item(new Date().getTime(), newItemLabel, newItemPrice))
    setNewItemLabel('')
    setNewItemPrice(0)
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
      <form onSubmit={createNewItem}>
        <input type="text" placeholder="item" onChange={e => setNewItemLabel(e.target.value)} value={newItemLabel} />
        <input type="number" onChange={e => setNewItemPrice(parseFloat(e.target.value))} value={newItemPrice} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.items,
})

const mapDispatchToProps = {
  fetchItems,
  addItemWithVTA,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}
