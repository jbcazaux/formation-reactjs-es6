import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShoppingList = props => {
  // TODO : créer un state pour stocker la liste d items

  useEffect(() => {
    axios
      .get('./items.json')
      .then(resp => resp.data)
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
