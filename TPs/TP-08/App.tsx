import { BrowserRouter as Router, Link, NavLink, Route, useParams, Routes, Outlet } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Users from './users/Users'
import UserDetails from './users/UserDetails'

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
