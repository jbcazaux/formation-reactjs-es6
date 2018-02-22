import * as React from 'react';
import Context from './Context';
import User from './User';

class Small extends React.Component {
    render() {
        return <Context.Consumer>
            {(context) => <div style={{backgroundColor: context.color, height: '125px', width: '33%'}}>
                Small, user = {context.user.id}-{context.user.login}
            </div>}
        </Context.Consumer>;
    }
}

class Medium extends React.Component {
    render() {
        return <div style={{backgroundColor: 'red', height: '250px', width: '50%'}}>Medium<Small/></div>;
    }
}

class Large extends React.Component {
    render() {
        return <div style={{backgroundColor: 'blue', color: 'white', height: '300px', width: '75%'}}>
                Large<Medium/>
            </div>;
    }
}

export default class App extends React.Component {
    render() {
        return <Context.Provider value={{color: 'purple', user: new User(1, 'admin')}}>
            <Large/>
        </Context.Provider>;
    }
}