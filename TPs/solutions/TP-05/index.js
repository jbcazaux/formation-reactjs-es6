import { ShoppingList } from './ShoppingList'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <QueryClientProvider client={queryClient}>
    <ShoppingList title="liste de courses" />
  </QueryClientProvider>
)
