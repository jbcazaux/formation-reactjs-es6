import { useEffect, useState, SyntheticEvent } from 'react'
import ShoppingItem from './ShoppingItem'
import { setItems, addItems } from './actions/items'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './reducers'
import Item from './domain/Item'

interface Props {
  title: string
}
const ShoppingList = ({ title }: Props) => {
  const [newItemLabel, setNewItemLabel] = useState<string>('')
  const [newItemPrice, setNewItemPrice] = useState<number>(0)
  const dispatch = useDispatch()
  const items = useTypedSelector(state => state.items)

  const handleAddItem = (event: SyntheticEvent) => {
    event.preventDefault()
    const addItemAction = addItems([new Item(Date.now(), newItemLabel, newItemPrice)])
    dispatch(addItemAction)
    setNewItemLabel('')
    setNewItemPrice(0)
  }

  useEffect(() => {
    const setItemsAction = setItems([
      new Item(1, 'pain', 0.95),
      new Item(2, 'gel douche', 2.85),
      new Item(3, 'cahier à spirales', 1.2),
    ])
    dispatch(setItemsAction)
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
