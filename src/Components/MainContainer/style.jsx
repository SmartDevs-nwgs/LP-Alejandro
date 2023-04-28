import styled from 'styled-components'

export const StyledMainContainer = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: var(--blue);

  .container {
    height: 100%;
    padding: 0px 20px 50px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: space-around;
    }
    @media screen and (min-width: 1300px) {
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: space-between;
      padding-bottom: 100px;
    }

    button {
      cursor: pointer;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--blue);
      padding: 10px;
      width: 159px;
      font-size: 12px;
      border: none;
      font-weight: bold;

      @media screen and (min-width: 600px) {
        width: 180px;
        font-size: 14px;
      }
      @media screen and (min-width: 900px) {
        font-size: 18px;
        width: 230px;
      }
      @media screen and (min-width: 1300px) {
        height: 80px;
        margin-right: 100px;
        margin-bottom: 100px;
        width: 350px;
        font-size: 25px;
      }
      .whatsapp-icon {
        font-size: 14px;
        font-weight: bold;
        margin-left: 3px;

        @media screen and (min-width: 900px) {
          font-size: 18px;
        }
        @media screen and (min-width: 1300px) {
          margin-left: 15px;
          font-size: 28px;
        }
        button:hover {
        }
      }
    }

    .info {
      display: flex;
      justify-content: center;
      flex-direction: column;

      @media screen and (min-width: 600px) {
        width: 60%;
      }
      @media screen and (min-width: 1300px) {
        margin-left: 40px;
        margin-bottom: 50px;
        justify-content: end;
        width: 680px;
        height: 500px;
      }

      .info-name {
        color: var(--white);
        font-size: 19px;
        letter-spacing: 5px;

        @media screen and (min-width: 450px) {
          font-size: 22px;
        }
        @media screen and (min-width: 900px) {
          font-size: 32px;
        }
        @media screen and (min-width: 1300px) {
          font-size: 54px;
        }
      }
      .info-bar {
        display: flex;
        text-align: center;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 8px;

        .white-bar {
          background-color: var(--white);
          width: 138px;
          height: 12px;
          margin-right: 3px;

          @media screen and (min-width: 900px) {
            width: 185px;
          }
          @media screen and (min-width: 1300px) {
            width: 290px;
            height: 15px;
          }
        }
        .info-bar-formation {
          color: var(--white);
          font-size: 17px;
          letter-spacing: 5px;

          @media screen and (min-width: 450px) {
            font-size: 22px;
          }
          @media screen and (min-width: 900px) {
            font-size: 32px;
          }
          @media screen and (min-width: 1300px) {
            font-size: 54px;
          }
        }
      }
      p {
        color: var(--white);
        font-size: 14px;

        @media screen and (min-width: 600px) {
          font-size: 16px;
        }
        @media screen and (min-width: 900px) {
          font-size: 20px;
        }
        @media screen and (min-width: 1300px) {
          font-size: 26px;
        }
      }
    }
  }
`
