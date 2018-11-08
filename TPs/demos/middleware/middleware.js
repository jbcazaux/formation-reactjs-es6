const middlewareLogger = store => next => action => {
  console.log('state:', store.getState())
  console.log('action:', action)
  const result = next(action)
  console.log('new state:', store.getState())
  return result
}

export default middlewareLogger
