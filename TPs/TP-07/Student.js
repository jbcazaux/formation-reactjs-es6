import PropTypes from 'prop-types'

class Student {
  constructor(id, lastname, firstname, grades) {
    this.id = id
    this.lastname = lastname
    this.firstname = firstname
    this.grades = grades
  }
}

export default Student

Student.propTypes = PropTypes.shape({
  firstname: PropTypes.string.isRequired,
  grades: PropTypes.arrayOf(PropTypes.number).isRequired,
  id: PropTypes.number.isRequired,
  lastname: PropTypes.string.isRequired,
})
