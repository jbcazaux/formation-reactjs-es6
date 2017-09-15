import * as React from 'react';
import User from './User';


export default class Optimisation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            user: new User(1, 'user1')
        }
    }


    render() {
        return <div>
            <div style={{backgroundColor: this.state.color}}>
                {this.state.user.id}-{this.state.user.login}
            </div>
            <button onClick={() => this.setColor('blue')}>Bleu</button>
            <button onClick={() => this.setColor('white')}>Blanc</button>
            <button onClick={() => this.setColor('red')}>Rouge</button>
            <br/>
            <button onClick={() => this.setUser(1)}>user 1</button>
            <button onClick={() => this.setUser(2)}>user 2</button>
            <button onClick={() => this.setUser(3)}>user 3</button>
        </div>;
    }

    shouldComponentUpdate(nexProps, nextState) {
        return false;
    }

    setColor(color) {
        this.setState(Object.assign({}, this.state, {color}))
    }

    setUser(id) {
        if (this.state.user.id === id) {
            this.setState(this.state);
        }
        this.setState(Object.assign({}, this.state, {user: new User(id, 'user' + id)}))
    }
}