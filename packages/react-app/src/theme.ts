import { createTheme } from '@mui/material'

const base = '#1e1e2e'
const blue = '#89b4fa'
const saphire = '#74c7ec'
const green = '#a6e3a1'
const red = '#f38ba8'
const text = '#cdd6f4'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: base
    },
    primary: {
      main: blue
    },
    secondary: {
      main: green
    },
    error: {
      main: red
    },
    info: {
      main: saphire
    },
    text: {
      primary: text,
      secondary: text
    }
  }
})
