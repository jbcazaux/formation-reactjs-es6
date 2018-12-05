import React from 'react'
import axios from 'axios'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    console.log('component did update', prevProps, prevState, prevContext)
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('component did mount')
    axios
      .get('./items.json')
      .then(resp => resp.data)
      .then(items => {
        this.setState({ items: items })
      })
  }

  render() {
    const { title } = this.props
    const { items } = this.state

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {items.map(item => (
            <ShoppingItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    )
  }
}

export default ShoppingList

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}
