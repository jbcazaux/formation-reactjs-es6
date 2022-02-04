import ReactDOM from 'react-dom'
import { ShoppingList } from './ShoppingList'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ShoppingList title="liste de courses" />
  </QueryClientProvider>,
  document.getElementById('root')
)
