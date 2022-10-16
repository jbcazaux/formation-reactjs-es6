import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from 'redux'
import {reducer, RootState} from './reducers'
import ShoppingList from './ShoppingList'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'

const store = createStore(reducer, devToolsEnhancer({}))

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <ShoppingList title="liste de courses" />
  </Provider>
)
