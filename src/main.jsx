import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.css'
import './styles/global.css'
import './styles/components.css'
import './styles/responsive.css'
import App from './App.jsx'

/**
 * main.jsx — Application Entry Point
 *
 * Import order matters for CSS cascade:
 * 1. variables.css  — custom properties (must load first)
 * 2. global.css     — reset + base styles
 * 3. components.css — BEM component styles
 * 4. responsive.css — media queries (must load last)
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
