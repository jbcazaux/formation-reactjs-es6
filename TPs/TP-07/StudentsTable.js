import PropTypes from 'prop-types'
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Student from './Student'

const StudentsTable = ({ students, selectStudent }) => {
  const style = {
    margin: 'auto',
    marginTop: '20px',
    width: '80%',
  }
  return (
    <Table style={style}>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map(student => (
          <TableRow key={student.id} onClick={() => selectStudent(student)} data-testid="student-row">
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.firstname}</TableCell>
            <TableCell>{student.lastname}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

StudentsTable.propTypes = {
  students: PropTypes.arrayOf(Student.propTypes).isRequired,
  selectStudent: PropTypes.func.isRequired,
}

export default StudentsTable
