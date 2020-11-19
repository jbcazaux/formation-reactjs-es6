import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'

const postData = [
  {
    id: 1,
    label: 'pain',
    price: 0.95,
  },
  {
    id: 2,
    label: 'gel douche',
    price: 2.85,
  },
  {
    id: 3,
    label: 'cahier à spirales',
    price: 1.2,
  },
]

const controller = new AbortController()
const signal = controller.signal

const ShoppingList = ({ title }) => {
  const [items, setItems] = useState([])

  useEffect(async () => {
    try {
      const resp = await fetch('https://httpbin.org/delay/1', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: postData,
        signal: signal,
      })
      const data = await resp.json()
      const items = JSON.parse(data.data)
      setItems(postData)
    } catch (e) {
      console.error(e)
    }
  }, [])

  const abort = () => {
    controller.abort()
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={abort}>abort request</button>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ShoppingList
