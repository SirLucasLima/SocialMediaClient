import styled from "styled-components";

export const Container = styled.div`
  flex: 3;
  position: sticky;
  top: 7rem;
  height: calc(100vh - 7rem);
  overflow: scroll;

  &::-webkit-scrollbar{
    display: none;
  }
`