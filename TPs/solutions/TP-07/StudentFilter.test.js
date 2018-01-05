import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Filter from './StudentFilter';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Filter', () => {
    it('renders Filter and calls passed function when filter text has changed', () => {
        // Given
        const mockOnChange = jest.fn();
        const component = shallow(<Filter onChange={mockOnChange}/>);

        // When
        component.find('input').simulate('change', {target: {value: 'name'}});

        // Then
        expect(mockOnChange).toBeCalledWith('name');
    });
});