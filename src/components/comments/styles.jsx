import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  > .write{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 20px 0px;

    input{
      flex:5;
      padding: 10px;
      border: 1px solid ${({theme}) => theme.border};
      color: ${({theme}) => theme.textColor};
      background-color: transparent;
    }

    button{
      border: none;
      background-color: #5271ff;
      color: white;
      padding: 10px;
      cursor: pointer;
      border-radius: 3px;
    }
  }

  > .comment {
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    .info {
      flex:5;
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: flex-start;

      span {
        font-weight: 500;
      }

      p{
        color: ${({theme}) => theme.textColorSoft};
      }
    }

    > .date{
      flex:1;
      align-self: center;
      color: gray;
      font-size: 12px;
    }
  }
`