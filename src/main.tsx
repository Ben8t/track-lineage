import 'reflect-metadata'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SpotifyContextProvider from './context/SpotifyContext.tsx'
import FlowContextProvider from './context/FlowContext.tsx'
import InversifyContextProvider from './context/InversifyContext.tsx'
import container from './inversify.config.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InversifyContextProvider container={container}>
      <SpotifyContextProvider>
        <FlowContextProvider>
          <App />
        </FlowContextProvider>
      </SpotifyContextProvider>
    </InversifyContextProvider>
  </React.StrictMode>,
)
