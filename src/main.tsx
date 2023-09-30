import 'reflect-metadata'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FlowContextProvider from './context/FlowContext'
import InversifyContextProvider from './context/InversifyContext'
import container from './inversify.config'
import OAuthMusicContextProvider from './context/OAuthMusicContext'

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
