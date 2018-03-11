import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
        Welcome !
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
        About this application...
    </div>
);

const Users = ({match}) => (
    <div>
        <h2>Users</h2>
        <ul>
            <li>
                <Link to={`${match.url}/anna`}>
                    Anna
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/elsa`}>
                    Elsa
                </Link>
            </li>
        </ul>
        <hr/>
        <Route path={`${match.url}/:name`} component={UserDetail}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a user.</h3>
        )}/>
    </div>
);

const UserDetail = ({match}) => (
    <div>
        <h3>Details of <b>{match.params.name}</b></h3>
        <img src={'/' + match.params.name + '.jpeg'} alt={match.params.name}/>
    </div>
);

export default App;