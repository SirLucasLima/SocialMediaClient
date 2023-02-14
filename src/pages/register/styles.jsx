import styled from "styled-components"
import register from "../../assets/register.jpg"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #2B2B1E;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    top: 5rem;
    width: 50%;
    padding: 1rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    top: 90%;
  }

  > .card {
    width: 50%;
    display: flex;
    flex-direction: row-reverse;
    background-color: white;
    min-height: 60rem;
    border-radius: 10px;
    overflow: hidden;

    .left {
      position: relative;
      flex: 1;
      background: linear-gradient(rgba(49, 81, 117, 0.498), rgba(49, 81, 117, 0.5)), url(${register}), center;
      background-size: cover;
      padding: 10rem 5rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      color: white;

      h1 {
        font-size: 10rem;
        line-height: 10rem;
        color: #FFFF27;
      }

      span {
        margin-top: 10rem;
        font-size: 1.4rem;
      }

      button {
        background-color: white;
        color: #315175;
      }
    }

    .right {
      position: relative;
      flex: 1;
      padding: 10rem 5rem;
      display: flex;
      flex-direction: column;
      gap: 5rem;
      justify-content: center;

      h1 {
        color: #315175;
      }
      
      form {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input {
          border: none;
          border-bottom: 1px solid lightgray;
          padding: 2rem 1rem;
        }

        button {
          background-color: #315175;
          color: white;
        }
      }
    }
  }
`;
