import axios from 'axios'
import itemsArray from '../../public/items.json'

let allItems = itemsArray

const items = {
  get: async () => {
    //const { data } = await axios.get('items.json')
    // return data

    // fake implem :
    return allItems
  },
  create: async item => {
    //await axios.post('/items')

    // fake imple :
    allItems = allItems.concat({ id: item.id, label: item.label, price: item.price })
  },
}

export default items
