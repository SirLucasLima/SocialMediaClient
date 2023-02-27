import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Container } from "./styles"

export function Login(){

  const {login} = useContext(AuthContext)
  const handleLoggin = () => {
    login()
  }

  return(
    <Container>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button> 
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button onClick={handleLoggin}>Login</button>
          </form>
        </div>
      </div>
    </Container>
  )

}