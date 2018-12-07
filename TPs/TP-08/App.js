import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Users</li>
      </ul>

      <hr />

      <Route path="/" component={Home} />
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

const Users = ({ match }) => (
  <div>
    <h2>Users</h2>
    <ul>
      <li>
        <a href="#">anna</a>
      </li>
      <li>
        <a href="#">elsa</a>
      </li>
    </ul>
    <hr />
    {/*<Route path={'TODO !!'} component={UserDetail}/>*/}
    <Route exact path={match.url} render={() => <h3>Please select a user.</h3>} />
  </div>
)

const UserDetail = ({ match }) => (
  <div>
    <h3>
      Details of <b>/!\get name from url/!\</b>
    </h3>
    <img src={'/' + match + '.jpeg'} alt={match} />
  </div>
)

export default App
