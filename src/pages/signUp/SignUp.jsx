import { Link } from "react-router-dom"
import { Container } from "./stytles"

export default function SignUp(){
  return(
    <Container>
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>FraLi Social</h1>
          <Link to={"/signin"}>
            Do you have an account?
          </Link>
        </div>
      </div>
    </Container>
  )
}