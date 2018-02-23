import React from 'react';

export default (WrappedComponent) => (props) => (
    <React.StrictMode>
        <WrappedComponent {...props} />
    </React.StrictMode>
);