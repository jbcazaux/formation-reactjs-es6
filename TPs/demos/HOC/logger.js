import React from 'react';

const addLoggerBehaviour = (WrappedComponent) => class extends React.Component {

    componentDidMount() {
        console.log('component did mount !');
    }

    render() {
        return (
            <WrappedComponent {...this.props}>
            </WrappedComponent>
        );
    }
};

export default addLoggerBehaviour;