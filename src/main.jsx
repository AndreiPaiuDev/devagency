import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'material-symbols/outlined.css'
import './index.css'
import App from './App.jsx'
import { reportWebVitals } from './utils/performance'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Optional: Report web vitals for performance monitoring
// Uncomment to enable performance logging in development
// reportWebVitals(console.log)
