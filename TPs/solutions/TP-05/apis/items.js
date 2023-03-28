import axios from 'axios'
import itemsArray from 'public/items.json'

const delay = async (value, duration) => new Promise(resolve => setTimeout(resolve, duration, value))

let allItems = itemsArray

const items = {
  get: async () => {
    //const { data } = await axios.get('items.json')
    // return data

    // fake implementation :
    return await delay(allItems, 2000)
  },
  create: async item => {
    // await axios.post('/items', {item})

    // fake implementation :
    allItems = allItems.concat({ id: item.id, label: item.label, price: item.price })
    await delay(null, 2000)
  },
}

export default items
