import * as React from 'react';
import User from './User';
import PropTypes from 'prop-types';

class Small extends React.Component {

    static contextTypes = {
        color: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired
    };

    render() {
        return <div style={{backgroundColor: this.context.color, height: '125px', width: '33%'}}>
            Small, user = {this.context.user.id}-{this.context.user.login}
        </div>;
    }
}

class Medium extends React.Component {
    render() {
        return <div style={{backgroundColor: 'red', height: '250px', width: '50%'}}>
            Medium
            <Small/>
        </div>;
    }
}

export default class Large extends React.Component {

    static childContextTypes = {
        color: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired
    };

    getChildContext() {
        return {color: 'purple', user: new User(1, 'admin')};
    }

    render() {
        return <div style={{backgroundColor: 'blue', color: 'white', height: '300px', width: '75%'}}>
            Large
            <Medium/>
        </div>;
    }
}