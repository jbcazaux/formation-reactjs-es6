import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ShoppingList } from './ShoppingList'

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <QueryClientProvider client={queryClient}>
    <ShoppingList title="liste de courses" />
  </QueryClientProvider>
)
