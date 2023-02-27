import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  height: 250px;
  margin-bottom: 30px;

  > .story {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    span {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: white;
      font-weight: 500;
    }

    button {
      position: absolute;
      bottom: 40px;
      left: 10px;
      color: white;
      background-color: #5271ff;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      cursor: pointer;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`