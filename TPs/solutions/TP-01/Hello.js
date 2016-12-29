import React from "react";

export default class Hello extends React.Component {

    render() {
        return (
            <div>
                Hello {this.props.name} !
            </div>
        );
    }
}

Hello.propTypes = {
    name: React.propTypes.string.isRequired,
    truc: React.propTypes.boolean
}