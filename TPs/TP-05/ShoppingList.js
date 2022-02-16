import React, { useState } from 'react'
import Item from './Item'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'
import { useMutation, useQuery } from 'react-query'
import itemsApi from './apis/items'
import { CircularProgress } from '@mui/material'

export const ShoppingList = ({ title }) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)

  const items = [] // TODO 1: Utiliser useQuery pour récupérer la liste des items
  // TODO 2: rajouter une mutation avec useMutation

  const createNewItem = async e => {
    e.preventDefault()
    await addItem(new Item(new Date().getTime(), newItemLabel, newItemPrice))
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

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}
