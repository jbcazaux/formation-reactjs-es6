import React from 'react'
import StudenstTable from './StudentsTable'
import Student from './Student'
import { fireEvent, render, screen } from '@testing-library/react'

describe('StudenstTable', () => {
  it('renders studentsTable with 2 names', () => {
    // Given
    const onSelectStudent = jest.fn()
    const students = [new Student(1, 'last1', 'first1', []), new Student(2, 'last2', 'first2', [])]
    render(<StudenstTable students={students} selectStudent={onSelectStudent} />)

    // Then
    expect(screen.getAllByTestId('student-row')).toHaveLength(2)
  })

  it('callbacks with clicked user', () => {
    // Given
    const onSelectStudent = jest.fn()
    let student = new Student(1, 'last1', 'first1', [])
    const students = [student]
    render(<StudenstTable students={students} selectStudent={onSelectStudent} />)

    // When
    fireEvent.click(screen.getByTestId('student-row'))

    // Then
    expect(onSelectStudent).toBeCalledWith(student)
  })
})
