import React from "react";
import axios from "axios";
import ShoppingItem from "./ShoppingItem"

class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('component will update', nextProps, nextState, nextContext);
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log('component did update', prevProps, prevState, prevContext);
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    componentDidMount() {
        console.log('component did mount');
        axios.get('./items.json')
            .then(resp => resp.data)
            .then(items => {
                this.setState({items: items});
            })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.state.items.map(item => <ShoppingItem key={item.id} item={item}/>)
                    }
                </ul>
            </div>
        )
    }
}

export default ShoppingList;
