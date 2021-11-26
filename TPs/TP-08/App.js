import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/*TODO: créer les <Link />*/}
        <li>About</li>
        <li>Users</li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*TODO: créer les <Route />*/}
      </Routes>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    Welcome !
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    About this application...
  </div>
)

const Users = () => (
  <div>
    <h2>Users</h2>
    <ul>
      {/*TODO: créer les <Link />*/}
      <li>anna</li>
      <li>elsa</li>
    </ul>
    <hr />
  </div>
)

const UserDetail = () => {
  const name = 'name' // TODO: Récupérer le nom
  return (
    <div>
      <h3>
        Details of <b>{name}</b>
      </h3>
      <img src={'/' + name + '.jpeg'} alt={name} />
    </div>
  )
}

export default App
