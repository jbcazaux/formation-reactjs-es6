import { useEffect, useState } from 'react'
import axios from 'axios'
import StudentFilter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './domain/Student'

const filterStudents = (students: ReadonlyArray<Student>, filter: string): ReadonlyArray<Student> =>
  students.filter(s => s.firstname.includes(filter) || s.lastname.includes(filter))

const StudentsApp = () => {
  const [students, setStudents] = useState<ReadonlyArray<Student>>([])
  const [filter, setFilter] = useState<string>('')
  const [student, setStudent] = useState<Student | null>(null)

  useEffect(() => {
    axios
      .get<ReadonlyArray<Student>>('students.json')
      .then(({ data }) => data.map(d => new Student(d.id, d.lastname, d.firstname, d.grades)))
      .then(setStudents)
  }, [])

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter)
  }

  const handleSelectStudent = (newSelectedStudent: Student) => {
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
