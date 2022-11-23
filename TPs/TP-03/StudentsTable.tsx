import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Student from './domain/Student'

interface Props {
  students: ReadonlyArray<Student>
  onSelectStudent: (s: Student) => void
}
const StudentsTable = ({ students, onSelectStudent }: Props) => null

export default StudentsTable
