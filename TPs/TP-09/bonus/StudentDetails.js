import React, {Component} from 'react'
import Student from './Student';
import FormLabel from '@material-ui/core/FormLabel';
import * as PropTypes from 'prop-types'

class StudentDetails extends Component {
  render() {
    console.log('render Details')
    const {student} = this.props
    return (<FormLabel>
      {
        student !== Student.NULL
          ? <div style={{'margin': '20px'}}>{[student.firstname, ' ', student.lastname]}</div>
          : <div style={{'margin': '20px', 'backgroundColor': 'red'}}>Aucun étudiant sélectionné !</div>
      }
    </FormLabel>)
  }
}

StudentDetails.propTypes = {student: PropTypes.any}

export default StudentDetails;