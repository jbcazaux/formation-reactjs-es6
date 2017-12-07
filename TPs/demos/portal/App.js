import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {

    render() {
        return (
            <div>
                <span>App</span>
                <Modale/>
            </div>
        );
    }
}

class Modale extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div>Modale!</div>,
            document.getElementById('secret-demo')
        );
    }

}

export default App;

