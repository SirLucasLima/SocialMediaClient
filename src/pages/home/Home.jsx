import { Container } from "./stytles"

import { NavBar } from "../../components/navbar/NavBar"
import { LeftBar } from "../../components/leftbar/LeftBar"
import { Stories } from "../../components/stories/Stories"
import { Share } from "../../components/share/Share"
import { Posts } from "../../components/posts/Posts"
import { RightBar } from "../../components/righbar/RighBar"

export default function Home(){
  return(
    <Container>
      <NavBar />
      <div className="layout">
        <LeftBar />
        <div className="feed">
          <Stories/>
          <Share/>
          <Posts/>
        </div>
        <RightBar />
      </div>
    </Container>
  )
}