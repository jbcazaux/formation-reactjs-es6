import PropTypes from 'prop-types'

export default class Item {
  constructor(id, label, price) {
    this.id = id
    this.label = label
    this.price = price
  }
}

Item.propTypes = PropTypes.shape({
  id: PropTypes.number,
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
})
