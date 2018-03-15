import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import StudentsApp from './StudentsApp';
import Student from './Student';
import Filter from './StudentFilter';
import StudentsTable from './StudentsTable';
import StudentDetails from './StudentDetails';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

// Enzyme.configure({adapter: new Adapter(), disableLifecycleMethods: true});
Enzyme.configure({adapter: new Adapter()});

describe('StudentsApp', () => {

    beforeEach(() => {
        axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({data: []}));
    });

    it('renders studentsApp and its sub components', () => {
        // Given
        const component = shallow(
            <StudentsApp/>
        );

        // Then
        expect(component.find(Filter).exists()).toBeTruthy();
        expect(component.find(StudentsTable).exists()).toBeTruthy();
        expect(component.find(StudentDetails).exists()).toBeTruthy();
    });

    it('updates filter', () => {
        // Given
        const component = shallow(<StudentsApp/>);

        // When
        component.instance().handleFilterChange('newFilter');

        // Then
        expect(component.state('filter')).toEqual('newFilter');
    });

    it('updates selectedStudent', () => {
        // Given
        const component = shallow(<StudentsApp/>);
        const student = new Student(1, 'last1', 'firt1', []);
        component.setState({students: [], filter: '', selectedStudent: Student.NULL});

        // When
        component.instance().handleSelectStudent(student);

        // Then
        expect(component.state('selectedStudent')).toEqual(student);
    });

    it('updates filtered students', () => {
        //Given
        const component = shallow(<StudentsApp/>);
        const students = [new Student(1, 'last1', 'firt1', []), new Student(2, 'last2', 'firt2', [])];
        component.setState({students, filter: '2', selectedStudent: Student.NULL});

        //when
        const result = component.instance().filteredStudents();

        //then
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual(students[1]);
    });
});
