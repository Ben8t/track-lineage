import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SpotifyContextProvider from './context/SpotifyContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpotifyContextProvider>
      <App />
    </SpotifyContextProvider>
  </React.StrictMode>,
)
