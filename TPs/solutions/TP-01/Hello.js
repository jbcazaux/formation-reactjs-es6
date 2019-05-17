import React from 'react'
import PropTypes from 'prop-types'

const Hello = ({ name }) => <div>Hello {name} !</div>

export default Hello

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  truc: PropTypes.bool,
}
