import ShoppingList from './ShoppingList'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<ShoppingList title="liste de courses" />)
