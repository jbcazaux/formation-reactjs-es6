import React from 'react'
import StudenstTable from './StudentsTable'
import Student from './Student'
import { fireEvent, render } from '@testing-library/react'

describe('StudenstTable', () => {
  it('renders studentsTable with 2 names', () => {
    // Given
    const onSelectStudent = jest.fn()
    const students = [new Student(1, 'last1', 'firt1', []), new Student(2, 'last2', 'firt2', [])]
    const { getAllByTestId } = render(<StudenstTable students={students} selectStudent={onSelectStudent} />)

    // Then
    expect(getAllByTestId('student-row')).toHaveLength(2)
  })

  it('callbacks with clicked user', () => {
    // Given
    const onSelectStudent = jest.fn()
    let student = new Student(1, 'last1', 'first1', [])
    const students = [student]
    const { getByTestId } = render(<StudenstTable students={students} selectStudent={onSelectStudent} />)

    // When
    fireEvent.click(getByTestId('student-row'))

    // Then
    expect(onSelectStudent).toBeCalledWith(student)
  })
})
