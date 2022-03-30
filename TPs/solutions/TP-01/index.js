import Hello from './Hello'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Hello name="world" />)
