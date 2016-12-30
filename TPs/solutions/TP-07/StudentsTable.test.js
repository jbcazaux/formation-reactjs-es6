import React from "react";
import {shallow} from "enzyme";
import StudenstTable from "./StudentsTable";
import Student from "./Student";

describe(StudenstTable, () => {
    it('renders studentsTable', () => {
        const onSelectStudent = jest.fn();
        const students = [new Student(1, 'last1', 'firt1', []), new Student(2, 'last2', 'firt2', [])];
        const component = shallow(
            <StudenstTable students={students} selectStudent={onSelectStudent}/>
        );
        expect(component.find('tr')).toHaveLength(3);
        component.find('tr').at(2).simulate('click');
        expect(onSelectStudent).toBeCalledWith(students[1]);
    });
});