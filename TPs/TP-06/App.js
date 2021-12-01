import React, { useContext } from 'react'
import User from './User'

const Small = () => {
  const { color, user } = { color: 'green', user: { id: 0, login: 'not from context' } } //TODO: get the context !

  return (
    <div style={{ backgroundColor: color, height: '125px', width: '33%' }}>
      Small, user = {user.id}-{user.login}
    </div>
  )
}

const Medium = () => (
  <div style={{ backgroundColor: 'red', height: '250px', width: '50%' }}>
    Medium
    <Small />
  </div>
)

const Large = () => (
  <div style={{ backgroundColor: 'blue', color: 'white', height: '300px', width: '75%' }}>
    Large
    <Medium />
  </div>
)

const App = () => (
  /* TODO: Set a context around 'Large'*/
  <Large />
)

export default App
