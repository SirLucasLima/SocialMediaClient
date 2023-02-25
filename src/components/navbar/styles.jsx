import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 5rem;
  border-bottom: 1px solid lightgrey;
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bg};

  svg {
    color: ${({theme}) => theme.textColor};;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 3rem;

    > a {
      text-decoration: none;
      font-weight: bold;
      font-size: 2rem;
      color: ${({theme}) => theme.logo};
    }

    > .search {
      display: flex;
      align-items: center;
      gap: 1rem;
      border: 1px solid ${({theme}) => theme.border};
      border-radius: 5px;
      pad: .5rem;
      
      
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
    gap: 2rem;

    > .user {
      display: flex;
      align-items: center;
      gap: 1rem;
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