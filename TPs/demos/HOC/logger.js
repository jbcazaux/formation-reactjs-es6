import React from 'react';

const addLoggerBehaviour = (WrappedComponent) => class extends React.Component {

    componentWillMount() {
        console.log('component will mount !');
    }

    render() {
        return (
            <WrappedComponent {...this.props}>
            </WrappedComponent>
        );
    }
};

export default addLoggerBehaviour;