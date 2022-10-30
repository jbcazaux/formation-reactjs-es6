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
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { fontWeight: 'bolder', backgroundColor: 'cyan' } : {})}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? { fontWeight: 'bolder', backgroundColor: 'pink' } : {})}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            style={({ isActive }) => (isActive ? { fontWeight: 'bolder', backgroundColor: 'yellow' } : {})}
          >
            Users
          </NavLink>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users/*" element={<Users />}>
          <Route path=":name" element={<UserDetails />} />
          <Route path="*" element={<h3>Please select a user.</h3>} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Page non trouvée (404) !</p>
            </main>
          }
        />
      </Routes>
    </div>
  </Router>
)

export default App
