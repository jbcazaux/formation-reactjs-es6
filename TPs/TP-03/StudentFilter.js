import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import PropTypes from 'prop-types'

const StudentFilter = ({ onChange }) => {
  const onFilterChange = e => {
    //TODO call the callback function provided by the parent
  }

  return (
    <form className="form-inline">
      <InputLabel htmlFor="filterName" className="control-label">
        Filtrer:
      </InputLabel>
      <Input
        id="filterName"
        type="text"
        placeholder="Tapez un nom..."
        onChange={onFilterChange}
        className="form-control"
        style={{ marginLeft: '5px' }}
      />
    </form>
  )
}

export default StudentFilter
