import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SpotifyContextProvider from './context/SpotifyContext.tsx'
import FlowContextProvider from './context/FlowContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpotifyContextProvider>
      <FlowContextProvider>
        <App />
      </FlowContextProvider>
    </SpotifyContextProvider>
  </React.StrictMode>,
)
