import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem 1.6rem;
  border-bottom: 1px solid ${({theme}) => theme.border};
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({theme}) => theme.bg};

  svg {
    font-size: 1.6rem;
    color: ${({theme}) => theme.textColor};
  }

  .left {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    > a {
      font-family: 'Gloria Hallelujah', cursive;
      font-size: 1.6rem;
      color: ${({theme}) => theme.logo};
      text-shadow: 2px 2px ${({theme}) => theme.bgSoft};
    }

    > .search {
      display: flex;
      align-items: center;
      gap: .8rem;
      border: 1px solid ${({theme}) => theme.border};
      border-radius: 8px;
      padding: .8rem;
      
      input {
        border: none;
        width: 50rem;
        margin: .1rem;
        background-color: transparent;
        color: ${({theme}) => theme.textColor};
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    > .user {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      font-weight: 500;
      
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        object-fit: cover;
      }
      span {
        color: ${({theme}) => theme.textColor};
      }
    }
  }
`