import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from "./Home";

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

export default App
