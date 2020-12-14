import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './Student'

const filterStudents = (students, filter) =>
  students.filter(s => s.firstname.includes(filter) || s.lastname.includes(filter))

const StudentsApp = () => {
  const [students, setStudents] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null)

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get('./students.json')
      setStudents(data)
    }
    fetchStudents()
  }, [])

  const handleFilterChange = newFilter => {
    setFilter(newFilter)
  }

  const handleSelectStudent = newSelectedStudent => {
    setSelectedStudent(newSelectedStudent)
  }

  return (
    <>
      <Filter onChange={handleFilterChange} />
      <StudentsTable students={filterStudents(students, filter)} onSelectStudent={handleSelectStudent} />
      <StudentDetails student={selectedStudent} />
    </>
  )
}

export default StudentsApp
