import React, { useEffect, useState } from 'react'
import Menu from '../Menu'

const Home = () => {
  const [title, setTitle] = useState('Loading ...')

  useEffect(() => {
    getTitle()
  }, [title])

  const getTitle = () => {
    setTimeout(() => {
      setTitle('HOMEPAGE')
    }, 2000)
  }

  return (
    <div>
      <Menu />
      <h1>{title}</h1>
    </div>
  )
}

export default Home
