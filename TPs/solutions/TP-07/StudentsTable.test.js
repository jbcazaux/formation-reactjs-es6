import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import StudenstTable from './StudentsTable';
import Student from './Student';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('StudenstTable', () => {
    it('renders studentsTable with 2 names', () => {
        const onSelectStudent = jest.fn();
        const students = [new Student(1, 'last1', 'firt1', []), new Student(2, 'last2', 'firt2', [])];
        const component = shallow(
            <StudenstTable students={students} selectStudent={onSelectStudent}/>
        );
        expect(component.find('tr')).toHaveLength(3);
    });
    it('callbacks with clicked user', () => {
        const onSelectStudent = jest.fn();
        let student = new Student(1, 'last1', 'firt1', []);
        const students = [student];
        const component = shallow(
            <StudenstTable students={students} selectStudent={onSelectStudent}/>
        );
        component.find('tr').at(1).simulate('click');
        expect(onSelectStudent).toBeCalledWith(student);
    });
});