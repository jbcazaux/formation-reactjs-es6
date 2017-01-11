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
    name: React.PropTypes.string.isRequired,
    truc: React.PropTypes.boolean
};