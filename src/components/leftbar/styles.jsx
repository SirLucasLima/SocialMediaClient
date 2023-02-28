import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  position: sticky;
  top: 7rem;
  height: calc(100vh - 7rem);
  overflow: scroll;
  background-color: ${({theme}) => theme.bgSoft};
  color: ${({theme}) => theme.textColor};

  &::-webkit-scrollbar{
    display: none;
  }
  
  .leftBar{
    padding: 2rem;
    
    > hr {
      margin: 2rem 0;
      border: none;
      height: 0.5px;
      background-color: ${props => props.theme.border};
    }
    
    > .menu {
      background-color: ${({theme}) => theme.bg};
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .user {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
        }

        span {
          font-size: 1.4rem;
        }
      }

      .item {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 3rem;
          height: 3rem;
        }

        span {
          font-size: 1.4rem;
        }
      }
    }

  }

`