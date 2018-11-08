import React, { useContext } from 'react'
import Context from './Context'
import User from './User'

function Small() {
  const { color, user } = useContext(Context)

  return (
    <div style={{ backgroundColor: color, height: '125px', width: '33%' }}>
      Small, user = {user.id}-{user.login}
    </div>
  )
}

class Medium extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red', height: '250px', width: '50%' }}>
        Medium
        <Small />
      </div>
    )
  }
}

class Large extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'blue', color: 'white', height: '300px', width: '75%' }}>
        Large
        <Medium />
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Context.Provider value={{ color: 'purple', user: new User(1, 'admin') }}>
        <Large />
      </Context.Provider>
    )
  }
}
