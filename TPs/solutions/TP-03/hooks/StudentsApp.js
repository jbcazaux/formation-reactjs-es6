import React, {useState, useEffect, useCallback, useRef} from 'react'
import axios from 'axios'
import Filter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './Student'

export default function StudentsApp() {
  console.log('render App')
  const [students, setStudents] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(Student.NULL)

  useEffect(() => {
      console.log('use effect')
      axios.get('./students.json')
        .then(({data: students}) => setStudents(students))
    }
    , [])

  const handleFilterChange = useCallback((filter2) => {
    console.log('recompute handleFilterChange')
    setFilter(filter2)
  }, [filter])

  const handleSelectStudent = useCallback(() => {
    console.log('recompute handleSelectStudent')
    setSelectedStudent(selectedStudent)
  }, [selectedStudent])

  const filteredStudents = () => {
    console.log('filter students')
    return students.filter(s =>
      (s.firstname.includes(filter)) || (s.lastname.includes(filter)))
  }

  return (
    <>
      <Filter onChange={handleFilterChange}/>
      <StudentsTable
        students={filteredStudents()}
        selectStudent={handleSelectStudent}
      />
      <StudentDetails student={Student.NULL}/>
    </>)
}
