import React from 'react';
import Item from './Item';
import ShoppingItem from './ShoppingItem';
import * as ItemsActions from './actions/items';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items,
        title: ownProps.title
    };
};

function mapActionCreatorsToProps(dispatch) {
    return bindActionCreators(ItemsActions, dispatch);
}

class ShoppingList_ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newItem: '', newPrice: 0};
    }

    componentDidMount() {
        this.props.loadItems();
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
                           onChange={e => this.setState({newItem: e.target.value})}
                           value={this.state.newItem}
                    />
                    <input type="number"
                           onChange={e => this.setState({newPrice: parseFloat(e.target.value)})}
                           value={this.state.newPrice}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }

    createNewItem(e) {
        e.preventDefault();
        this.props.addItems([new Item((new Date()).getTime(), this.state.newItem, this.state.newPrice)]);
        this.setState({newItem: '', newPrice: 0});
    }
}
const ShoppingList = connect(mapStateToProps, mapActionCreatorsToProps)(ShoppingList_);
export default ShoppingList;
