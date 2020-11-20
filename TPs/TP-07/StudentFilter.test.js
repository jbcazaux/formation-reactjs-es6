import React from 'react'
import Filter from './StudentFilter'
import { render, fireEvent } from '@testing-library/react'

describe('Filter', () => {
  it('renders Filter and calls passed function when filter text has changed', () => {
    // Given
    const mockOnChange = jest.fn()
    const { container } = render(<Filter onChange={mockOnChange} />)
    const input = null // TODO : comment récupérer l'élément input ?

    // When
    // TODO : enovoyer un événement change sur l'élément input

    // Then
    // TODO : s'assurer que le callback onChange a été appelé avec le bon paramètre
  })
})
