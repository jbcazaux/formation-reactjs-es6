import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)}>Click me !</button>
      <ComponentToOptimize counter={counter}/>
    </div>
  )
}

const Component1 = () => {
  useEffect(() => {
    console.log('Component1 did mount')
    return () => console.log('Component1 will unmount')
  }, [])

  return (<div style={{ backgroundColor: 'red', height: '100px', width: '100px' }}>
    Component1
  </div>)
}

const Component2 = () => {
  useEffect(() => {
    console.log('Component2 did mount')
    return () => console.log('Component2 will unmount')
  }, [])

  return (<div style={{ backgroundColor: 'green', height: '100px', width: '100px' }}>
    Component2
  </div>)
}

export default App

const ComponentToOptimize = ({ counter }) => {

  const renderNotOptimized = () => {
    if ( counter % 2 === 0 ) {
      return (
        <div>
          <Component1/>
          <Component2/>
        </div>
      )
    }

    return (
      <div>
        <Component2/>
      </div>
    )
  }

  const renderWithNull = () => {
    return (
      <div>
        {counter % 2 === 0 ? <Component1/> : null}
        <Component2/>
      </div>
    )
  }

  const renderWithKey = () => {
    if ( counter % 2 === 0 ) {
      return (
        <div>
          <Component1 key={'c1'}/>
          <Component2 key={'c2'}/>
        </div>
      )
    }

    return (
      <div>
        <Component2 key={'c2'}/>
      </div>
    )
  }

  //return renderNotOptimized()
  // return renderWithNull();
  return renderWithKey();
}
