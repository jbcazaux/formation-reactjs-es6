import StudentDetails from './StudentDetails'
import { render, screen } from '@testing-library/react'
import Student from './domain/Student'

describe('StudentDetails', () => {
  it('renders with no Student', () => {
    // Given
    render(<StudentDetails student={null} />)

    // Then
    expect(screen.getByText('Aucun étudiant sélectionné !')).toBeTruthy()
  })

  it('renders with a Student', () => {
    // Given
    render(<StudentDetails student={new Student(1, 'last', 'first', [])} />)

    // Then
    expect(screen.getByText('first last')).toBeTruthy()
  })
})
