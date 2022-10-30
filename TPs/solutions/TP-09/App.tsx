import React, { useCallback, useMemo, useState } from 'react'
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
  const result = useMemo(() => add(a, b), [a, b])

  return <div> {result} </div>
}
Calculator.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}
const MCalculator = React.memo(Calculator)

const App = () => {
  const [sel, setSel] = useState(0)

  const updateSel = useCallback(() => {
    const date = new Date()
    setSel(date.getMilliseconds())
  }, [])

  return (
    <div>
      Sel : {sel}
      <Button onClick={updateSel} />
      <MCalculator a={4} b={2} />
    </div>
  )
}

export default App
