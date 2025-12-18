import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // 1. Import Provider (Menggunakan HashRouter agar aman di GitHub Pages)
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Bungkus App dengan HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)