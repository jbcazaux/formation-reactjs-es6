import React, { useState, useEffect, useRef } from 'react'
import Menu from '../Menu'

const Route2 = () => {
  const [title, setTitle] = useState('Loading Route 2...')

  useEffect(() => {
    getTitle()
  }, [])

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
