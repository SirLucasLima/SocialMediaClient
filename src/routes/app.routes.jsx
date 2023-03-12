import { Routes, Route } from "react-router-dom"

import Home from "../pages/home/Home" 
import Profile from "../pages/profile/Profile" 
import SignIn from "../pages/signIn/SignIn" 
import SignUp from "../pages/signUp/SignUp"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/register" element={<SignUp />}/>
    </Routes>
  )
}