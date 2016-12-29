import React from 'react';
import Item from './Item';
import ShoppingItem from './ShoppingItem';
import {setItems, addItemsWithTVA, fetchItems} from './actions/items';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items,
        title: ownProps.title
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items) => dispatch(setItems(items)),
        onAddItems: (items) => dispatch(addItemsWithTVA(items)),
        getItems: () => dispatch(fetchItems())
    };
};

class ShoppingList_ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newItem: '', newPrice: 0};
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.props.items.map(item => <ShoppingItem key={item.id} item={item}/>)
                    }
                </ul>
                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text"
                           placeholder="item"
                           onChange={(e) =>
                            this.setState(Object.assign({}, this.state, {newItem: e.target.value}))}
                           value={this.state.newItem}
                    />
                    <input type="number"
                           onChange={(e) =>
                            this.setState(Object.assign({}, this.state, {newPrice: parseFloat(e.target.value)}))}
                           value={this.state.newPrice}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }

    addItem(e) {
        e.preventDefault();
        this.props.onAddItems([new Item((new Date()).getTime(), this.state.newItem, this.state.newPrice)]);
        this.setState({newItem: '', newPrice: 0});
    }
}

const ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList_);
export default ShoppingList;

