import itemsArray from '../../public/items.json'

const delay = (f, duration) => setTimeout(() => Promise.resolve(f()), duration)

let allItems = itemsArray

const items = {
  get: async () => {
    //const { data } = await axios.get('items.json')
    // return data

    // fake implementation :
    return delay(() => allItems, 2000)
  },
  create: async item => {
    //await axios.post('/items')

    // fake implementation :
    await delay(() => {
      allItems = allItems.concat({ id: item.id, label: item.label, price: item.price })
    }, 2000)
  },
}

export default items
