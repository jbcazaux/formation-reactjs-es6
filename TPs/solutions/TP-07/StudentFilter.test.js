import React from 'react';
import {shallow} from 'enzyme';
import Filter from './StudentFilter';

describe(Filter, () => {
    it('renders Filter and calls passed function when filter text has changed', () => {
        const mockOnChange = jest.fn();
        const component = shallow(
            <Filter onChange={mockOnChange}/>
        );
        component.find('input').simulate('change', {target: {value: 'name'}});
        expect(mockOnChange).toBeCalledWith('name');
    });
});