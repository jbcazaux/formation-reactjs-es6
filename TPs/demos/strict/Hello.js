import React from 'react';
import PropTypes from 'prop-types';

export default class Hello extends React.Component {

    componentWillMount(){
        console.log('use of componentWillMount should raise a warning !');
    }

    render() {
        return (
            <div>
                Hello {this.props.name} !
            </div>
        );
    }
}

Hello.propTypes = {
    name: PropTypes.string.isRequired
};