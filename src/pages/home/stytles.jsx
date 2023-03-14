import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.bgSoft};

  .layout {
    display: flex;
    
    .feed {
      margin-top: 1.6rem;
      flex: 6;
    }
  }
`