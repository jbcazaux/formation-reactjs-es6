import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  onClick: () => void
}

const Button = ({ onClick }: Props) => {
  console.log('render Button')
  return <button onClick={onClick}>re-render App</button>
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default React.memo(Button)
// Memoizer Button __SI BESOIN__
