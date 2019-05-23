import React, { useMemo, useState } from 'react'

const User = ({ user }) => <span>{user.name}</span>

const MemoizedUser2 = React.memo(({ user }) => <User user={user} />)
const MemoizedUser3 = ({ user }) => {
  return useMemo(() => <User user={user} />, [user.id])
}

const App = () => {
  const [user, setUser] = useState({ id: 1, name: 'userName' })
  const memoizedUser1 = useMemo(() => <User user={user} />, [user.id])

  return (
    <>
      <div>
        user: <User user={user} />
      </div>
      <div>memoizedUser1: {memoizedUser1}</div>
      <div>
        memoizedUser2: <MemoizedUser2 user={user} />
      </div>
      <div>
        memoizedUser3: <MemoizedUser3 user={user} />
      </div>

      <button onClick={() => setUser({ ...user, name: `userName-${Date.now()}` })}>change name</button>
      <button onClick={() => (user.id = Date.now())}>change id by mutation</button>
    </>
  )
}

export default App
