import React from 'react'
import StudentsApp, { filteredStudents } from './StudentsApp'
import { render, act, waitForElement } from '@testing-library/react'
import axios from 'axios'
import Student from './Student'

describe('StudentsApp', () => {
  beforeEach(() => {
    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: [new Student(1, 'last1', 'first1', [])] }))
  })

  it('renders studentsApp and its sub components', async () => {
    // Given
    let { container, getByTestId } = render(<StudentsApp />)
    await waitForElement(() => getByTestId('student-row'), container)

    // Then
    expect(container).toMatchSnapshot()
  })

  it('updates filtered students', () => {
    //Given
    const students = [new Student(1, 'last1', 'firt1', []), new Student(2, 'last2', 'firt2', [])]

    //when
    const result = filteredStudents(students, '2')

    //then
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(students[1])
  })
})
