import React, { SyntheticEvent, useState } from 'react'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'
import { useMutation, useQuery } from '@tanstack/react-query'
import itemsApi from './apis/items'
import { CircularProgress } from '@mui/material'
import Item from './domain/Item'

interface Props {
  title: string
}
export const ShoppingList = ({ title }: Props) => {
  const [newItemLabel, setNewItemLabel] = useState<string>('')
  const [newItemPrice, setNewItemPrice] = useState<number>(0)

  const items: ReadonlyArray<Item> = [] // TODO 1: Utiliser useQuery pour récupérer la liste des items
  // TODO 2: rajouter une mutation avec useMutation

  const createNewItem = async (e: SyntheticEvent) => {
      e.preventDefault()

      // TODO 3: appeler ici la mutation qui a été créée

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
