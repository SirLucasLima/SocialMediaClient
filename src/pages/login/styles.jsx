import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #c1beff;
  display: flex;
  align-items: center;
  justify-content: center;

  > .card {
    display: flex;
    background-color: white;

    .left {
      flex: 1;
    }

    .right {
      flex: 1;
    }
  }


`;