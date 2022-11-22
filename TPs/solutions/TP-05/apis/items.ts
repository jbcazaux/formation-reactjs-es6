import axios from 'axios'
import itemsArray from 'public/items.json'
import Item from '../domain/Item'

const delay = async <T>(value: any, duration: number): Promise<T> =>
  new Promise(resolve => setTimeout(resolve, duration, value))

let allItems = itemsArray

const items = {
  get: async (): Promise<ReadonlyArray<Item>> => {
    //const { data } = await axios.get('items.json')
    // return data

    // fake implementation :
    return await delay<ReadonlyArray<Item>>(allItems, 1000)
  },
  create: async (item: Item): Promise<void> => {
    // await axios.post('/items', {item})

    // fake implementation :
    allItems = allItems.concat({ id: item.id, label: item.label, price: item.price })
    await delay<never>(null, 1000)
  },
}

export default items
