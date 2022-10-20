import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/index'
import ShoppingList from './ShoppingList'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <ShoppingList title="liste de courses" />
  </Provider>
)
