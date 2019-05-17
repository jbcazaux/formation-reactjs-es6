import React from 'react'
import User from './User'

const Optimisation = () => {
  const [color, setColor] = useState('red')
  const [user, setUser] = useState(new User(1, 'user1'))

  const selectUser = id => {
    if (user.id !== id) {
      setUser({ user: new User(id, 'user' + id) })
    }
  }

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        {user.id}-{user.login}
      </div>
      <button onClick={() => setColor('blue')}>Bleu</button>
      <button onClick={() => setColor('white')}>Blanc</button>
      <button onClick={() => setColor('red')}>Rouge</button>
      <br />
      <button onClick={() => selectUser(1)}>user 1</button>
      <button onClick={() => selectUser(2)}>user 2</button>
      <button onClick={() => selectUser(3)}>user 3</button>
    </div>
  )
}

export default Optimisation
