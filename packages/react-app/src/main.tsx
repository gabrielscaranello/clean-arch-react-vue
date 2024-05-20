import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'

import '@styles/app.scss'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { theme } from './theme.ts'

const root = ReactDOM.createRoot(document.getElementById('app')!)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
