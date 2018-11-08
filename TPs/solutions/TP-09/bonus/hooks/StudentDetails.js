import React from 'react'
import Student from './Student'
import FormLabel from '@material-ui/core/FormLabel'

const StudentDetails = ({ student }) => {
  console.log('renders StudentDetails', student)
  return (
    <FormLabel>
      {student !== Student.NULL ? (
        <div style={{ margin: '20px' }}>{[student.firstname, ' ', student.lastname]}</div>
      ) : (
        <div style={{ margin: '20px', backgroundColor: 'red' }}>Aucun étudiant sélectionné !</div>
      )}
    </FormLabel>
  )
}

export default StudentDetails
