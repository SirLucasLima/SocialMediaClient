import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({theme}) => theme.bgSoft};

  .images {
    width: 100%;
    height: 30rem;
    position: relative;

    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0 0 20px 20px;
    }

    .profilePic {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 20rem;
    }
  }
  .profileContainer {
    padding: 2rem 7rem;

    .uInfo {
      height: 28rem;
      -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
      -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
      box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
      border-radius: 20px;
      color: ${({theme}) => theme.textColor};
      background-color: ${({theme}) => theme.bg};
      padding: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;

      .left {
        flex: 1;
        display: flex;
        gap: 10px;

        a{
          color: ${({theme}) => theme.textColorSoft};
        }
      }

      .center {
        flex: 1;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        span {
          font-size: 3rem;
          font-weight: 500;
        }

        .info {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;

          .item {
            display: flex;
            align-items: center;
            gap: 5px;
            color: ${({theme}) => theme.textColorSoft};

            span {
              font-size: 12px;
            }
          }
        }
        
        button {
          margin-top: 5rem;
          border: none;
          background-color: #5271ff;
          color: white;
          padding: 1rem 2rem;
          border-radius: 5px;
          cursor: pointer;
        }
      }

      .right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
      }
    }
  }
`;