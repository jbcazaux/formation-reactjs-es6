import React, { useContext } from 'react'
import { InfosContext } from './Context'
import User from './domain/User'

const Small = () => {
  const { color, user } = { color: '', user: new User(0, '') } // useContext(...) //TODO: récupérer le context !

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
  /* TODO: Mettre un contexte autour de 'Large'*/
  <Large />
)

export default App
