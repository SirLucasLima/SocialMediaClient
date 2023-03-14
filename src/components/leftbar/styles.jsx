import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  position: sticky;
  top: 6.4rem;
  height: calc(100vh - 6.4rem);
  overflow: scroll;
  background-color: ${({theme}) => theme.bgSoft};
  color: ${({theme}) => theme.textColor};

  &::-webkit-scrollbar{
    display: none;
  }
  
  .leftBar{
    padding: 0 1.6rem;
    
    > .line {
      height: 2.4rem;
      margin-bottom: 1px solid ${props => props.theme.border};
    }
    
    > .menu {
      background-color: ${({theme}) => theme.bg};
      padding: 2rem;
      margin-bottom: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-radius: 8px;

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