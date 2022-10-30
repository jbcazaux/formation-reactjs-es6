import StudentsApp, { filterStudents } from './StudentsApp'
import { render, screen } from '@testing-library/react'
import axios from 'axios'
import Student from './domain/Student'

describe('StudentsApp', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: [new Student(1, 'last', 'first', [])] }))
  })

  it('renders studentsApp and its sub components', async () => {
    // Given
    const { container } = render(<StudentsApp />)

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
