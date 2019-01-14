import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>Compteur : {count} </div>

      <button onClick={() => setCount(currentCount => ++currentCount)}>PLUS</button>

      <button onClick={() => setCount(currentCount => --currentCount)}>MOINS</button>
    </>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
