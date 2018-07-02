import React from 'react';
import ShoppingItem from './ShoppingItem';
import {fetchItems} from './actions/items';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
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
                <form onSubmit={this.createNewItem.bind(this)}>
                    <input type="text"
                           placeholder="item"
                           onChange={(e) => this.setState({newItem: e.target.value})}
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

    createNewItem(e) {
        e.preventDefault();
        this.setState({newItem: '', newPrice: 0});
    }
}

const ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList_);
export default ShoppingList;

