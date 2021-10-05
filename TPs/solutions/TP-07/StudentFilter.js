import Input from '@mui/material/Input'
import PropTypes from 'prop-types'

const StudentFilter = ({ onChange }) => {
  const onFilterChange = e => {
    onChange(e.target.value)
  }

  return (
    <form>
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

StudentFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default StudentFilter
