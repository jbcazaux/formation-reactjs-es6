import { Link, Outlet } from 'react-router-dom'

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

export default Users
