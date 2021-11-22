import { BrowserRouter as Router, Link, NavLink, Route, useParams, Routes, Outlet } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? { fontWeight: 'bolder', backgroundColor: 'cyan' } : {})}>
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
          <Route path=":name" element={<UserDetail />} />
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

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        <li>
          <Link to="anna">Anna</Link>
        </li>
        <li>
          <Link to="elsa">Elsa</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}

const UserDetail = () => {
  const { name } = useParams()

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
