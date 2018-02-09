import React from 'react';
import axios from 'axios';
import Filter from './StudentFilter';
import StudentsTable from './StudentsTable';
import StudentDetails from './StudentDetails';
import Student from './Student';

class StudentsApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {students: [], filter: '', selectedStudent: Student.NULL};
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSelectStudent = this.handleSelectStudent.bind(this);
    }

    componentDidMount() {
        axios.get('./students.json')
            .then(resp => resp.data)
            .then(students => {
                this.setState({students: students});
            })
    }

    render() {
        return (
            <div>
                <Filter onChange={this.handleFilterChange}/>
                <StudentsTable
                    students={this.filteredStudents()}
                    selectStudent={this.handleSelectStudent}
                />
                <StudentDetails student={this.state.selectedStudent}/>
            </div>)
    }

    handleFilterChange(filter) {
        this.setState({filter});
    }

    handleSelectStudent(student) {
        this.setState({selectedStudent: student});
    }

    filteredStudents() {
        return this.state.students.filter(s =>
            (s.firstname.indexOf(this.state.filter) > -1) || (s.lastname.indexOf(this.state.filter) > -1))
    }
}

export default StudentsApp;