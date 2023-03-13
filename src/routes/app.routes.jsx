import { Routes, Route, Outlet, RouterProvider } from "react-router-dom"

import Profile from "../pages/profile/Profile"
import Home from "../pages/home/Home"

import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/global'

export function AppRoutes() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile/:id" element={<Profile />}/>
      </Routes>
    </ThemeProvider>
  )
}