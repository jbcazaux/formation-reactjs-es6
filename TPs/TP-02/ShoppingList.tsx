import { useEffect } from 'react'
import axios from 'axios'
import Item from './domain/Item'

interface Props {
  title: string
}

const ShoppingList = ({ title }: Props) => {
  // TODO : créer un state pour stocker la liste d items

  useEffect(() => {
    axios
      .get<ReadonlyArray<any>>('./items.json')
      .then(resp => resp.data)
      .then(data => data.map(d => new Item(d.id, d.label, d.price)))
        .then(fetchedItems => {
            // TODO: enregistrer les items dans le state
        })
  }, [])

    return (
        <div>
            <h2>TODO: Title</h2>
            <ul>
                <li>items...</li>
            </ul>
        </div>
    )
}

export default ShoppingList
