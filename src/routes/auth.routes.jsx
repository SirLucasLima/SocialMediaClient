import { Routes, Route } from "react-router-dom"

import SignIn from "../pages/signIn/SignIn" 
import SignUp from "../pages/signUp/SignUp"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/register" element={<SignUp />}/>
    </Routes>
  )
}