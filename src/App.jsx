import SignUp from "./pages/SignUp/SignUp"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { darkTheme, lightTheme } from './styles/global'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return(
    <ThemeProvider theme={ darkTheme }>
      <SignUp />
    </ThemeProvider>
  )
}
