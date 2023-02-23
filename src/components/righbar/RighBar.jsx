import { Link } from "react-router-dom"
import { Container } from "./styles"

import Login from "../../assets/login.jpg"

export function RightBar(){
  return(
    <Container>
      <div className="rightBar">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Login} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}