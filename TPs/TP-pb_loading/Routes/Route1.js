import React, { useState, useEffect } from 'react'
import Menu from '../Menu'

const Route1 = () => {
  const [title, setTitle] = useState('Loading ...')

  useEffect(async () => {
    await getTitle()
  })

  const getTitle = () => {
    setTimeout(() => {
      setTitle('Route1')
    }, 2000)
  }

  return (
    <div>
      <Menu />
      <h1>{title}</h1>
    </div>
  )
}

export default Route1
