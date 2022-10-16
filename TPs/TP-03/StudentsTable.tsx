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
const StudentsTable = ({ students, onSelectStudent }: Props) => (
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
        <TableRow key={student.id} onClick={() => onSelectStudent(student)}>
          <TableCell>{student.id}</TableCell>
          <TableCell>{student.firstname}</TableCell>
          <TableCell>{student.lastname}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export default StudentsTable
