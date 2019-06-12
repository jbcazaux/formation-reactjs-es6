import React from 'react'
import StudentsApp, { filteredStudents, Gum } from './StudentsApp'
import renderer, { act } from 'react-test-renderer'
import axios from 'axios'
import Filter from './StudentFilter'
import StudentsTable from './StudentsTable'
import StudentDetails from './StudentDetails'
import Student from './Student'

const mockSetState = jest.fn()
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn().mockImplementation(s => [s, mockSetState]),
}))
describe('StudentsApp', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: [] }))
  })

  it('renders studentsApp and its sub components', () => {
    // Given
    const component = renderer.create(<StudentsApp />)

    // Then
    expect(component.root.findByType(Filter)).toBeTruthy()
    expect(component.root.findByType(StudentsTable)).toBeTruthy()
    expect(component.root.findByType(StudentDetails)).toBeTruthy()
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
