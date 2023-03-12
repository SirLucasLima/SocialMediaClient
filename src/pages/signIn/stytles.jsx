import styled from "styled-components";
import login from "../../assets/login.jpg"

export const Container = styled.div`
  height: 100vh;
  background-color: ${({theme}) => theme.bgSoft};
  display: flex;
  align-items: center;
  justify-content: center;

  a, button {
    position: absolute;
    min-width: 70%;
    top: 83%;

    padding: 1.6rem;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }

  .card{
    width: 50%;
    display: flex;
    background-color: ${({theme}) => theme.bg};
    border-radius: 8px;
    height: 64rem;
    overflow: hidden;
    
    > .left{
      flex: 1;
      position: relative;
      
      padding: 5.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      background: linear-gradient(rgba(49, 81, 117, 0.498), rgba(49, 81, 117, 0.5)), url(${login}), center;
      background-size: cover;
      
      h1 {
        font-size: 10rem;
        line-height: 10rem;
        margin-top: 5.6rem;

        font-family: 'Gloria Hallelujah', cursive;
        color: ${({theme}) => theme.logo};
        text-shadow: 2px 2px ${({theme}) => theme.bgSoft};
      }

      a, button {
        background-color: ${({theme}) => theme.bgSoft};
        color: ${({theme}) => theme.blue};
      }

    }

    > .right{
      flex: 1;
      position: relative;

      padding: 5.6rem;
      display: flex;
      flex-direction: column;
      gap: 5.4rem;

      h1 {
        font-size: 3.2rem;
        color: ${({theme}) => theme.textColor};
      }

      form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 4.8rem;

        input {
          width: 100%;
          border: none;
          padding: 1.6rem .8rem;
          background-color: transparent;
          color: ${({theme}) => theme.textColor};
          border-bottom: 1px solid ${({theme}) => theme.purple};
          
          &::placeholder {
            color: white;
          }            
        }
        
        a, button {
          background-color: ${({theme}) => theme.blue};
          color: ${({theme}) => theme.bgSoft};
        }
      }
    }
  }
`