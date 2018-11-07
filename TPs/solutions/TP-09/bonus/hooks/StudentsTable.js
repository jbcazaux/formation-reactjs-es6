import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const StudentsTable = ({students, selectStudent}) => {
  console.log('render StudentsTable')
  const style = {
    margin: 'auto',
    marginTop: '20px',
    width: '80%'
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
        {
          students.map(student => (
            <TableRow key={student.id} onClick={() => selectStudent(student)}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.firstname}</TableCell>
              <TableCell>{student.lastname}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}

export default StudentsTable