import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import StudentDetails from './StudentDetails'
import Student from './Student'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('StudentDetails', () => {
  it('renders with no Student', () => {
    // Given
    const component = shallow(<StudentDetails student={Student.NULL} />)

    // Then
    expect(component.find('div').text()).toContain('Aucun étudiant sélectionné')
  })
  it('renders with a Student', () => {
    // Given
    const component = shallow(<StudentDetails student={new Student(1, 'last', 'first', [])} />)

    // Then
    expect(component.find('div').text()).toContain('first last')
  })
})
