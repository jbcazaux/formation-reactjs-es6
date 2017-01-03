import React from "react";
import axios from "axios";

class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('component did mount');
        axios.get('./items.json')
            .then(resp => resp.data)
            .then(items => {
                //TODO: mettre le state a jour
            })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default ShoppingList;
