import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Filter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './Student'

export default function StudentsApp() {
  console.log('render StudentsApp')

  const [students, setStudents] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(Student.NULL)

  useEffect(() => {
    console.log('use effect')
    axios.get('./students.json').then(({ data: students }) => setStudents(students))
  }, [])

  const handleFilterChange = useCallback(f => {
    console.log('call handleFilterChange')
    setFilter(f)
  }, [])

  const handleSelectStudent = useCallback(s => {
    console.log('call handleSelectStudent')
    setSelectedStudent(s)
  }, [])

  const filteredStudents = (students, filter) => {
    console.log('filter students')
    return students.filter(s => s.firstname.includes(filter) || s.lastname.includes(filter))
  }

  const studentFilter = useMemo(() => <Filter onChange={handleFilterChange} />, [filter])

  const memoizedStudents = useMemo(() => filteredStudents(students, filter), [students, filter])

  const studentsTable = useMemo(
    () => <StudentsTable students={memoizedStudents} selectStudent={handleSelectStudent} />,
    [memoizedStudents]
  )

  const studentDetails = useMemo(() => <StudentDetails student={selectedStudent} />, [selectedStudent])

  return (
    <>
      {studentFilter}
      {studentsTable}
      {studentDetails}
      <Dummy cb={handleFilterChange} />
    </>
  )
}

const Dummy = React.memo(props => {
  console.log('render dummy')
  return <>dummy !</>
})
