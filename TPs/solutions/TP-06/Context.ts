import React from 'react'
import User from './domain/User'

interface IContext {
  color: string
  user: User
}

export const InfosContext = React.createContext<IContext>({
  color: 'red',
  user: new User(0, 'default user'),
})
