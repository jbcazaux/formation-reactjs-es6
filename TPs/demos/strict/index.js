import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'
import strict from './strict'

const StrictHello = strict(Hello)

ReactDOM.render(<StrictHello name="world" />, document.getElementById('root'))
