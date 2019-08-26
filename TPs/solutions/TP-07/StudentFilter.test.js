import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Filter from './StudentFilter'
import Adapter from 'enzyme-adapter-react-16'
import { render, fireEvent } from '@testing-library/react'

Enzyme.configure({ adapter: new Adapter() })

describe('Filter', () => {
  it('renders Filter and calls passed function when filter text has changed', () => {
    // Given
    const mockOnChange = jest.fn()
    const { container } = render(<Filter onChange={mockOnChange} />)
    const input = container.querySelector('input')

    // When
    fireEvent.change(input, { target: { value: 'name' } })

    // Then
    expect(mockOnChange).toBeCalledWith('name')
  })
})
