import PropTypes from 'prop-types'

class Student {
  constructor(id, lastname, firstname, grades) {
    this.id = id
    this.lastname = lastname
    this.firstname = firstname
    this.grades = grades
  }

  static NULL = new Student(0, '', '', [])
}

export const StudentPropTypes = PropTypes.shape({
  firstname: PropTypes.string.isRequired,
  grades: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  lastname: PropTypes.string.isRequired,
})

export default Student
