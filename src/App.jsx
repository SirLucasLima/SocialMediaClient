import Login from "./pages/login/Login"

import { darkTheme, lightTheme } from './styles/global'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return(
    <ThemeProvider theme={ darkTheme }>
      <Login />
    </ThemeProvider>
  )
}
