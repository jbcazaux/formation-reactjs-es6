import ReactDOM from 'react-dom'
import React, { useState, useCallback, useEffect, useMemo } from 'react'

const Counter = () => {
  const [count, setCount] = useState(10)
  const [salt, setSalt] = useState(0)
  const onClickPlus = useCallback(() => setCount(currentCount => ++currentCount), [salt])
  const onClickMinus = useCallback(() => setCount(currentCount => --currentCount), [salt])
  const onClickClear = useCallback(() => setSalt(salt + 1), [])
  return (
    <>
      <div>Compteur : {count} </div>

      <Button onClick={onClickPlus}>PLUS</Button>

      <Button onClick={onClickMinus}>MOINS</Button>
      <hr />
      <Button onClick={onClickClear}>CLEAR</Button>
    </>
  )
}

const Button = ({ children, onClick }) => <button onClick={onClick}>{children}</button>

ReactDOM.render(<Counter />, document.getElementById('root'))
