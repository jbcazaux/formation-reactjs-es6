import React from 'react';
import Item from './Item';
import ShoppingItem from './ShoppingItem';
import {setItems, addItem} from './actions/items';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

class ShoppingList_ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newItem: '', newPrice: 0};
    }

    componentDidMount() {
        // TODO: Provide the 'onSetItems' method in the props
        /*this.props.onSetItems([
            new Item(1, 'pain', 0.95),
            new Item(2, 'gel douche', 2.85),
            new Item(3, 'cahier à spirales', 1.20)
        ]);*/
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        // TODO iterate on items
                        /*this.props.items.map(item => <ShoppingItem key={item.id} item={item}/>)*/
                    }
                </ul>
                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text"
                           placeholder="item"
                           onChange={(e) =>
                            this.setState({newItem: e.target.value})}
                           value={this.state.newItem}
                    />
                    <input type="number"
                           onChange={(e) =>
                            this.setState({newPrice: parseFloat(e.target.value)})}
                           value={this.state.newPrice}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }

    addItem(e) {
        // TODO: call the addItem action creator (the one available in the props)
    }
}

const ShoppingList = connect(...)()
export default ShoppingList;
