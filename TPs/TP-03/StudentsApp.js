import React from 'react'
import axios from 'axios'
import Filter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './Student'

class StudentsApp extends React.Component {
  constructor(props) {
    super(props)
    // TODO état par défaut
  }

  componentDidMount() {
    axios
      .get('./students.json')
      .then(resp => resp.data)
      .then(students => {
        console.log(students)
        // TODO mettre a jour l etat
      })
  }

  render() {
    return (
      <div>
        {/*
                    <Filter onChange={}/>
                */}
        {<StudentsTable students={this.filteredStudents()} selectStudent={this.handleSelectStudent} />}
        {/*<StudentDetails student={Student.NULL}/>*/}
      </div>
    )
  }

  handleFilterChange(filter) {}

  handleSelectStudent(student) {}

  filteredStudents() {
    return this.state.students
  }
}

export default StudentsApp
