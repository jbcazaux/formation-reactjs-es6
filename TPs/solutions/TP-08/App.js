import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {

    render() {
        return <div>
            <h1>Hello, React Router!</h1>
            <ul>
                <li><Link to="/part1">Partie 1</Link></li>
                <li><Link to="/part2">Partie 2</Link></li>
            </ul>
            {this.props.children}
        </div>
    }

}

export default App;