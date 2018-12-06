import PropTypes from 'prop-types'
import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

const Filter = ({ onChange }) => {
  return (
    <form className="form-inline">
      <InputLabel htmlFor="filterName" className="control-label">
        Filtrer:
      </InputLabel>
      <Input
        id="filterName"
        type="text"
        placeholder="Tapez un nom..."
        onChange={e => onChange(e.target.value)}
        className="form-control"
        style={{ marginLeft: '5px' }}
      />
    </form>
  )
}

export default Filter

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}
