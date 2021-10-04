import Student from './Student'
import FormLabel from '@mui/material/FormLabel'

const StudentDetails = ({ student }) => (
  <FormLabel>
    {student ? (
      <div style={{ margin: '20px' }}>{[student.firstname, ' ', student.lastname]}</div>
    ) : (
      <div style={{ margin: '20px', backgroundColor: 'red' }}>Aucun étudiant sélectionné !</div>
    )}
  </FormLabel>
)

StudentDetails.propTypes = {
  student: Student.propTypes,
}

export default StudentDetails
