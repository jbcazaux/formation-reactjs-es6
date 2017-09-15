import React from 'react';
import {shallow} from 'enzyme';
import StudentDetails from './StudentDetails';
import Student from './Student';

describe(StudentDetails, () => {
    it('renders with no Student', () => {
        const component = shallow(
            <StudentDetails student={Student.NULL}/>
        );
        expect(component.text()).toContain('Aucun étudiant sélectionné');
    });
    it('renders with a Student', () => {
        const component = shallow(
            <StudentDetails student={new Student(1, 'last', 'first', [])}/>
        );
        expect(component.text()).toContain('first last');
    });
});