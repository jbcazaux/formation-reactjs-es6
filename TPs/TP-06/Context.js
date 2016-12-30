import * as React from 'react';
import User from './User';

class Small extends React.Component {

    context;

    render() {
        return <div style={{backgroundColor: this.context.color, height: '125px', width: '33%'}}>
            Small, user = {this.context.user.id}-{this.context.user.login}
        </div>;
    }
}

class Medium extends React.Component {
    render() {
        return <div style={{backgroundColor: 'red', height: '250px', width: '50%'}}>Medium<Small/></div>;
    }
}

export default class Large extends React.Component {

    render() {
        return <div style={{backgroundColor: 'blue', color: 'white', height: '300px', width: '75%'}}>
            Large<Medium/>
        </div>;
    }
}