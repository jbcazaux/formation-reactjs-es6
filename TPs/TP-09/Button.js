import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick }) => {
  console.log('render Button')
  return <button onClick={onClick}>re-render App</button>
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button
// Memoizer Button __SI BESOIN__
