import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/route-1">Route 1</Link>
    </li>
    <li>
      <Link to="/route-2">Route 2</Link>
    </li>
  </ul>
)

export default Menu
