import React from 'react';
import {shallow} from 'enzyme';
import StudentsApp from './StudentsApp';
import Student from './Student';
import Filter from './StudentFilter';
import StudentsTable from './StudentsTable';
import StudentDetails from './StudentDetails';

describe(StudentsApp, () => {
    it('renders studentsApp and its sub components', () => {
        const component = shallow(
            <StudentsApp/>
        );
        expect(component.find(Filter).exists()).toBeTruthy();
        expect(component.find(StudentsTable).exists()).toBeTruthy();
        expect(component.find(StudentDetails).exists()).toBeTruthy();
    });

    it('updates filter', () => {
        const component = shallow(
            <StudentsApp/>
        );
        component.instance().handleFilterChange('newFilter');
        expect(component.state('filter')).toEqual('newFilter');
    });

    it('updates selectedStudent', () => {
        const component = shallow(
            <StudentsApp/>
        );
        const student = new Student(1, 'last1', 'firt1', []);
        component.setState({students: [], filter: '', selectedStudent: Student.NULL});
        component.instance().handleSelectStudent(student);
        expect(component.state('selectedStudent')).toEqual(student);
    });

    it('updates filtered students', () => {
        const component = shallow(
            <StudentsApp/>
        );
        const students = [new Student(1, 'last1', 'firt1', []), new Student(2, 'last2', 'firt2', [])];
        component.setState({students, filter: '2', selectedStudent: Student.NULL});
        const result = component.instance().filteredStudents();
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual(students[1]);
    });
});
