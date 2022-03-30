import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducers/index'
import ShoppingList from './ShoppingList'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <ShoppingList title="liste de courses" />
  </Provider>
)
