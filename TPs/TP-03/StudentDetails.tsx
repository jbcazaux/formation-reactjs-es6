import Student from './domain/Student'
import FormLabel from '@mui/material/FormLabel'

interface Props {
  student: Student | null
}
const StudentDetails = ({ student }: Props) => (
  <FormLabel>
    {student ? (
      <div style={{ margin: '20px' }}>
        {student.firstname} {student.lastname}
      </div>
    ) : (
      <div style={{ margin: '20px', backgroundColor: 'red' }}>Aucun étudiant sélectionné !</div>
    )}
  </FormLabel>
)

export default StudentDetails
