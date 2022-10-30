import StudentsApp from './StudentsApp'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<StudentsApp />)
