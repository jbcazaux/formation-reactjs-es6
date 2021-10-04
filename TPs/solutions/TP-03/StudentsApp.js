import { useEffect, useState } from 'react'
import axios from 'axios'
import StudentFilter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'

const filterStudents = (students, filter) => {
  return students.filter(s => s.firstname.includes(filter) || s.lastname.includes(filter))
}

const StudentsApp = () => {
  const [students, setStudents] = useState([])
  const [filter, setFilter] = useState('')
  const [student, setStudent] = useState(null)

  useEffect(() => {
    axios.get('students.json').then(({ data }) => {
      setStudents(data)
    })
  }, [])

  const handleFilterChange = newFilter => {
    setFilter(newFilter)
  }

  const handleSelectStudent = newSelectedStudent => {
    setStudent(newSelectedStudent)
  }

  return (
    <>
      <StudentFilter onChange={handleFilterChange} />
      <StudentsTable students={filterStudents(students, filter)} onSelectStudent={handleSelectStudent} />
      <StudentDetails student={student} />
    </>
  )
}

export default StudentsApp
