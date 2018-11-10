import PropTypes from 'prop-types'

export default class Item {
  constructor(id, label, price) {
    this.id = id
    this.label = label
    this.price = price
  }
}

export const ItemPropTypes = PropTypes.shape({ label: PropTypes.string.isRequired, price: PropTypes.number.isRequired })
