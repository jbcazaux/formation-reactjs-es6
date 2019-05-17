import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './Student'

const StudentsApp = () => {
  // TODO define a state to store the students list
  // TODO define a state to store the filter value
  // TODO define a state to store the selected Student

  useEffect(() => {
    axios.get('./students.json').then(({ data: students }) => {
      // TODO: store the students list received from the web service in the state
    })
  }, [])

  const handleFilterChange = f => {
    // TODO store the new filter value in the state
  }

  const handleSelectStudent = s => {
    // TODO store the new selectedStudent in the state
  }

  const filteredStudents = (students, filter) => {
    // TODO: return a filtered list of the students rather than the whole list
    return students
  }

  return (
    <>
      TODO: uncomment the child components one by one
      {/*<Filter onChange={handleFilterChange} />*/}
      {/*<StudentsTable students={filteredStudents(students, filter)} selectStudent={handleSelectStudent} />*/}
      {/*<StudentDetails student={selectedStudent} />*/}
    </>
  )
}

export default StudentsApp
