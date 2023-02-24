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

  .rightBar {
    padding: 2rem;
    
    > .item {
      -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
      -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
      box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
      padding: 2rem;
      margin-bottom: 2rem;
      
      span {
        color: gray;
      }
      
      .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2rem 0rem;
        
        .userInfo {
          display: flex;
          align-items: center;
          gap: 2rem;
          position: relative;
          
          img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            object-fit: cover;
          }

          .online {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
            background-color: limegreen;
            position: absolute;
            top: 0;
            left: 3rem;
          }
          
          p {
            color: gray;
          }

          span {
            font-weight: 500;
            color: black;
          }
        }
        
        .buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
          
          button {
            border: none;
            padding: .5rem;
            color: white;
            cursor: pointer;

            &:first-child {
              background-color: #5271ff;
            }
            
            &:last-child {
              background-color: #f0544f;
            }
          }
        }
      }
    }
  }
`