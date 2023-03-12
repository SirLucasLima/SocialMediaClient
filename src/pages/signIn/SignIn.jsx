import { Link } from "react-router-dom"
import { Container } from "./stytles"

export default function SignIn(){
  return(
    <Container>
      <div className="card">
        <div className="left">
          <h1>FraLi Social</h1>
          <Link to={"/register"}>
            <button>Don't you have an account?</button>
          </Link>
        </div>
        <div className="right">
          <h1>Sign In</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </Container>
  )
}