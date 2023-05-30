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

  const {
    data: items = [],
    refetch,
    isLoading: isLoadingGet,
  } = useQuery({
    queryKey: ['items'],
    queryFn: itemsApi.get,
  })
  const { mutateAsync: addItem, isLoading: isLoadingAdd } = useMutation({
    mutationFn: itemsApi.create,
    onSuccess: () => refetch(),
  })

  const createNewItem = async (e: SyntheticEvent) => {
    e.preventDefault()

    await addItem(new Item(new Date().getTime(), newItemLabel, newItemPrice))

    setNewItemLabel('')
    setNewItemPrice(0)
  }

  return (
    <div>
      <h2>{title}</h2>
      {isLoadingGet && <CircularProgress size={30} />}
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
        {isLoadingAdd && (
          <li>
            <CircularProgress size={10} />
          </li>
        )}
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
