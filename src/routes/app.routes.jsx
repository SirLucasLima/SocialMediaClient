import { Routes, Route, Outlet, RouterProvider } from "react-router-dom"
import { ThemeProvider } from 'styled-components'

import Profile from "../pages/profile/Profile"
import Home from "../pages/home/Home"

import { NavBar } from "../components/navbar/NavBar"
import { RightBar } from "../components/righbar/RighBar"
import { LeftBar } from "../components/leftBar/LeftBar"

import { DarkModeContext } from "../context/DarkModeContext"
import { useContext } from "react"

import { darkTheme, lightTheme } from '../styles/global'
import { createBrowserRouter } from "react-router-dom/dist"

export function AppRoutes() {
  const { darkMode } = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ])

  return (
    <ThemeProvider theme={ darkMode ? darkTheme : lightTheme }>
      <Routes>
        <Route path="/" element={router}/>
      </Routes>
    </ThemeProvider>
  )
}