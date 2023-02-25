import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Home } from "./pages/home/Home";
import { Profile } from "./pages/profile/Profile";

import { NavBar } from "./components/navbar/NavBar";
import { LeftBar } from "./components/leftbar/LeftBar";
import { RightBar } from "./components/righbar/RighBar";

import { darkTheme, lightTheme } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  const currentUser = true

  const Layout = () => {
    const theme = "dark"
    /* const [theme, setTheme] = useState("dark")
    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
    } */

    return(
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme }>
        <div >
          <NavBar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </ThemeProvider>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/profile/:id",
          element:<Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
