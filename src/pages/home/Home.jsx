import { Stories } from "../../components/stories/Stories"
import { Share } from "../../components/share/Share"
import { Posts } from "../../components/posts/Posts"
import { Container } from "./styles"

export function Home(){
  return (
    <Container>
      <Stories/>
      <Share/>
      <Posts/>
    </Container>
  )
}
