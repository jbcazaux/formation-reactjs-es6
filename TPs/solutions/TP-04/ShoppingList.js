import React from 'react'
import Item from './Item'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'
import { setItems, addItem } from './actions/items'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  items: state.items,
})

class ShoppingList_ extends React.Component {
  constructor(props) {
    super(props)
    this.state = { newItem: '', newPrice: 0 }
    this.addItem = this.addItem.bind(this)
  }

  componentDidMount() {
    this.props.setItems([
      new Item(1, 'pain', 0.95),
      new Item(2, 'gel douche', 2.85),
      new Item(3, 'cahier à spirales', 1.2),
    ])
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
        <form onSubmit={this.addItem}>
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

  addItem(e) {
    e.preventDefault()
    this.props.addItem(new Item(new Date().getTime(), this.state.newItem, this.state.newPrice))
    this.setState({ newItem: '', newPrice: 0 })
  }
}

const ShoppingList = connect(
  mapStateToProps,
  { setItems, addItem }
)(ShoppingList_)

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ShoppingList
