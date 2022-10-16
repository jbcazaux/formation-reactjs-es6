import { useEffect, useState } from 'react'
import axios from 'axios'
import ShoppingItem from './ShoppingItem'
import Item from './domain/Item'

interface Props {
  title: string
}

const ShoppingList = ({ title }: Props) => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([])

  useEffect(() => {
    axios
      .get<ReadonlyArray<any>>('./items.json')
      .then(resp => resp.data)
      .then(data => data.map(d => new Item(d.id, d.label, d.price)))
      .then(setItems)
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
