// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Local
import { App } from './App'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
