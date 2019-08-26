import React from 'react'
import StudentDetails from './StudentDetails'
import { render, fireEvent } from '@testing-library/react'
import Student from './Student'

describe('StudentDetails', () => {
  it('renders with no Student', () => {
    // Given
    const { container, getByText } = render(<StudentDetails student={Student.NULL} />)

    // Then
    expect(getByText('Aucun étudiant sélectionné !')).toBeTruthy()
  })

  it('renders with a Student', () => {
    // Given
    const { container, getByText } = render(<StudentDetails student={new Student(1, 'last', 'first', [])} />)

    // Then
    expect(getByText('first last')).toBeTruthy()
  })
})
