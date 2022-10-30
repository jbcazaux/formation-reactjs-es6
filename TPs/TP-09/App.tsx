import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const add = (x: number, y: number): number => {
  console.log('une loooongue addition')
  return x + y
}

interface CalculatorProps {
  a: number
  b: number
}
const Calculator = ({ a, b }: CalculatorProps) => {
  console.log('render Calculator')
  // TODO : Utiliser useMemo pour éviter de refaire le calcul si a et b ne changent pas
  // TODO : OU utiliser React.memo pour memoizer le composant Calculator
  const result = add(a, b)

  return <div> {result} </div>
}
Calculator.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}

const App = () => {
  const date = new Date()
  const [sel, setSel] = useState(0)

  return (
    <div>
      Sel : {sel}
      {/* TODO : Utiliser useCallback pour ne pas que Button se réaffiche */}
      <Button onClick={() => setSel(date.getMilliseconds())} />
      <Calculator a={4} b={2} />
    </div>
  )
}

export default App
