import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles, { darkTheme } from './styles/global'

import { Routes } from './routes'
import { DarkModeContextProvider } from './context/DarkModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <GlobalStyles />
      <Routes />
    </DarkModeContextProvider>
  </React.StrictMode>,
)
