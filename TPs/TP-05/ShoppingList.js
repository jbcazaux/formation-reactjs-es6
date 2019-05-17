import React, { useEffect, useState } from 'react'
import ShoppingItem from './ShoppingItem'
import { fetchItems, addItem } from './actions/items'
import { connect } from 'react-redux'
import Item from './Item'

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadItems: () => {
      // TODO: dispatch the fetchItems action
    },
    addItem: item => dispatch(addItem(item)),
  }
}

const ShoppingList = ({ title, items, loadItems, addItem }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  useEffect(() => {
    // TODO: provide a loadItems function in the props, that dispatches the fetchItems redux action
    //  loadItems()
  }, [])

  const createNewItem = e => {
    e.preventDefault()
    addItem(new Item(Date.now(), newItemLabel, newItemPrice))
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

const ShoppingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList_)
export default ShoppingList
