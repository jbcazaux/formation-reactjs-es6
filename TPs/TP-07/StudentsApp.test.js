import React from 'react'
import StudentsApp from './StudentsApp'
import { render } from '@testing-library/react'
import axios from 'axios'
import Student from './Student'

describe('StudentsApp', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: [new Student(1, 'last', 'first', [])] }))
  })

  it('renders studentsApp and its sub components', async () => {
    // Given
    const { container, getByTestId } = render(<StudentsApp />)

    // Then
    // TODO: snapshot
  })

  it('filters students', () => {
    //Given
    const students = [new Student(1, 'last1', 'first1', []), new Student(2, 'last2', 'first2', [])]

    //when

    //then
  })
})
