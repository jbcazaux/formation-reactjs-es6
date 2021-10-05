import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Student from './Student'
import PropTypes from 'prop-types'

const StudentsTable = ({ students, onSelectStudent }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Firstname</TableCell>
        <TableCell>Lastname</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {students.map(student => (
        <TableRow key={student.id} onClick={() => onSelectStudent(student)} data-testid="student-row">
          <TableCell>{student.id}</TableCell>
          <TableCell>{student.firstname}</TableCell>
          <TableCell>{student.lastname}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

StudentsTable.propTypes = {
  students: PropTypes.arrayOf(Student.propTypes).isRequired,
  onSelectStudent: PropTypes.func.isRequired,
}

export default StudentsTable
