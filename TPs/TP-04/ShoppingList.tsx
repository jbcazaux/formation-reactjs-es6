import React, { useEffect, useState } from 'react'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'
import { setItems } from './actions/items'
import { useDispatch } from 'react-redux'
import Item from './domain/Item'

interface Props {
  title: string
}
const ShoppingList = ({ title }: Props) => {
  const [newItemLabel, setNewItemLabel] = useState<string>('')
  const [newItemPrice, setNewItemPrice] = useState<number>(0)
  const dispatch = useDispatch()
  const items: ReadonlyArray<Item> = [] // TODO 2: Récupérer les items depuis le store redux

  const handleAddItem = (event: React.SyntheticEvent) => {
    //TODO 3: dispatcher l'action créée par l'action creator 'addItems'
  }

  useEffect(() => {
    const newItems = [new Item(1, 'pain', 0.95), new Item(2, 'gel douche', 2.85), new Item(3, 'cahier à spirales', 1.2)]
    // TODO 1: Créer une action grace à l'action creator 'setItems' puis la dispatcher pour que le store soit mis à jour
    // const action = setItems(newItems)
    // dispatch(action)
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

export default ShoppingList

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}
