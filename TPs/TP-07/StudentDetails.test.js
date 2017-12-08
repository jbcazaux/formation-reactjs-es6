import React from "react";
import {shallow} from "enzyme";
import StudentDetails from "./StudentDetails";
import Student from "./Student";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('StudentDetails', () => {
    it('renders with no Student', () => {
    });
    it('renders with a Student', () => {
    });
});