import React from 'react'
import Student, { StudentPropTypes } from './Student'
import FormLabel from '@material-ui/core/FormLabel'

const StudentDetails = ({ student }) => {
  console.log('render StudentDetails', student)
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

StudentDetails.propTypes = {
  student: StudentPropTypes.isRequired,
}

export default StudentDetails
