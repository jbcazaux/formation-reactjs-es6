import Input from '@mui/material/Input'
import { ChangeEvent } from 'react'

interface Props {
  onChange: (s: string) => void
}
const StudentFilter = ({ onChange }: Props) => {
  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
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

export default StudentFilter
