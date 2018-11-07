import React from 'react';

class Small extends React.Component {
    render() {
        /* TODO: get context */
        return (
            <div style={{backgroundColor: 'todo', height: '125px', width: '33%'}}>
                Small, user = {ctx.user.id}-{ctx.user.login}
            </div>
        );
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
        return; // <Context.Provider value={TODO: set a context !}>
        <Large/>;
        // </Context.Provider>;
    }
}