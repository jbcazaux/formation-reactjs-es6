import React from 'react'
import StudentDetails from './StudentDetails'
import renderer from 'react-test-renderer'
import Student from './Student'

describe('StudentDetails', () => {
  it('renders with no Student', () => {
    // Given
    const component = renderer.create(<StudentDetails student={Student.NULL} />)

    // Then
    expect(component.root.findByType('div').props.children).toContain('Aucun étudiant sélectionné')
  })

  it('renders with a Student', () => {
    // Given
    const component = renderer.create(<StudentDetails student={new Student(1, 'last', 'first', [])} />)

    // Then
    expect(component.root.findByType('div').props.children.join('')).toContain('first last')
  })
})
