import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShoppingList = props => {
  // TODO : define a state to store the items list

  useEffect(() => {
    axios
      .get('./items.json')
      .then(resp => resp.data)
      .then(items => {
        // TODO: Store the items in the state
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
