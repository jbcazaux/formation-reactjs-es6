import React from 'react'
import Item from './Item'
import ShoppingItem from './ShoppingItem'
import { fetchItems, addItemWithTVA } from './actions/items'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = {
  fetchItems,
  addItemWithTVA,
}

class ShoppingList_ extends React.Component {
  constructor(props) {
    super(props)
    this.state = { newItem: '', newPrice: 0 }
    this.createNewItem = this.createNewItem.bind(this)
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.items.map(item => (
            <ShoppingItem key={item.id} item={item} />
          ))}
        </ul>
        <form onSubmit={this.createNewItem}>
          <input
            type="text"
            placeholder="item"
            onChange={e => this.setState({ newItem: e.target.value })}
            value={this.state.newItem}
          />
          <input
            type="number"
            onChange={e => this.setState({ newPrice: parseFloat(e.target.value) })}
            value={this.state.newPrice}
          />
          <button type="submit">add</button>
        </form>
      </div>
    )
  }

  createNewItem(e) {
    e.preventDefault()
    this.props.addItemWithTVA(new Item(new Date().getTime(), this.state.newItem, this.state.newPrice))
    this.setState({ newItem: '', newPrice: 0 })
  }
}
const ShoppingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList_)
export default ShoppingList
