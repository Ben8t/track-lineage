import 'reflect-metadata'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FlowContextProvider from './context/FlowContext.tsx'
import InversifyContextProvider from './context/InversifyContext.tsx'
import container from './inversify.config.ts'
import OAuthMusicContextProvider from './context/OAuthMusicContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InversifyContextProvider container={container}>
      <OAuthMusicContextProvider>
        <FlowContextProvider>
          <App />
        </FlowContextProvider>
      </OAuthMusicContextProvider>
    </InversifyContextProvider>
  </React.StrictMode>,
)
