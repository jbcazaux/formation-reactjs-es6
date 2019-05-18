import React from 'react'
import { InputLabel, Input } from '@material-ui/core'

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.onFilterChange = this.onFilterChange.bind(this)
  }

  onFilterChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    console.log('render Filter')
    return (
      <form className="form-inline">
        <InputLabel htmlFor="filterName" className="control-label">
          Filtrer:
        </InputLabel>
        <Input
          id="filterName"
          type="text"
          placeholder="Tapez un nom..."
          onChange={this.onFilterChange}
          className="form-control"
          style={{ marginLeft: '5px' }}
        />
      </form>
    )
  }
}

export default Filter
