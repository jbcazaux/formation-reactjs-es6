import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { firstname: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    alert('form was submitted: name: ' + this.input.value + ', firstname ' + this.state.firstname)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Uncontrolled Name:
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <label>
          Controlled First Name:
          <input
            type="text"
            onChange={e => this.setState({ firstname: e.target.value })}
            value={this.state.firstname}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameForm
