import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Input = ({ v }) => {
  const [value, setValue] = useState(v)

  return <input style={{ display: 'block' }} type="text" value={value} onChange={e => setValue(e.target.value)} />
}
Input.propTypes = {
  v: PropTypes.string.isRequired,
}

const ProblemWithIndexAsKey = () => {
  const [letters, setLetters] = useState(['b', 'c', 'd'])

  const addA = () => setLetters(prev => ['a'].concat(prev))

  /*DO NOT USE index as key !!*/
  return (
    <>
      <button onClick={addA}>add A</button>
      {letters.map((letter, index) => (
        <Input v={letter} key={index} />
      ))}
    </>
  )
  /*try key={index + Math.random()} ?*/
}

export default ProblemWithIndexAsKey
