import React, { useState, useEffect } from 'react'
import Menu from '../Menu'

const Route2 = () => {
  const [title, setTitle] = useState('Loading ...')

  useEffect(async () => {
    await getTitle()
  })

  const getTitle = () => {
    setTimeout(() => {
      setTitle('Route2')
    }, 2000)
  }

  return (
    <div>
      <Menu />
      <h1>{title}</h1>
    </div>
  )
}

export default Route2
