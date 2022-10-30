import Filter from './StudentFilter'
import { render, fireEvent } from '@testing-library/react'

describe('Filter', () => {
  it('renders Filter and calls passed function when filter text has changed', () => {
    // Given
    const mockOnChange = jest.fn()
    const { container } = render(<Filter onChange={mockOnChange} />)
    const input = container.querySelector('input')!

    // When
    fireEvent.change(input, { target: { value: 'name' } })

    // Then
    expect(mockOnChange).toHaveBeenCalledWith('name')
  })
})
