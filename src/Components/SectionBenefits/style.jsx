import styled from 'styled-components'

export const StyledSectionBenefits = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  .background {
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 1300px) {
    height: 100vh;
  }

  .container {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--blue);
    padding: 0px 20px 0px 20px;
    @media screen and (min-width: 1300px) {
      width: 700px;
      height: 100%;
      padding-left: 60px;
      justify-content: end;
    }

    h1 {
      font-weight: bold;
      font-size: 20px;
      @media screen and (min-width: 900px) {
        font-size: 24px;
      }
      @media screen and (min-width: 1300px) {
        margin-bottom: 80px;
        font-size: 30px;
      }
    }
    p {
      margin-top: 15px;
      font-size: 15px;
      font-weight: 500;
      @media screen and (min-width: 900px) {
        font-size: 20px;
      }
      @media screen and (min-width: 1300px) {
        font-size: 24px;
      }
    }
    .button {
      display: flex;
      justify-content: center;

      button {
        margin-top: 25px;
        cursor: pointer;
        background-color: var(--blue);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        padding: 10px;
        width: 165px;
        font-size: 12px;
        border: none;
        font-weight: bold;
        @media screen and (min-width: 600px) {
          font-size: 15px;
          width: 200px;
        }
        @media screen and (min-width: 900px) {
          font-size: 16px;
          width: 220px;
        }
        @media screen and (min-width: 1300px) {
          margin-top: 50px;
          font-size: 16px;
          width: 240px;
        }

        .whatsapp-icon {
          font-size: 14px;
          font-weight: bold;
          margin-left: 5px;
          margin-top: 1px;
          @media screen and (min-width: 900px) {
            font-size: 20px;
          }
          @media screen and (min-width: 1300px) {
            font-size: 35px;
          }
        }
      }
    }
    h2 {
      font-weight: 500;
    }
  }
  .session {
    margin-top: 50px;
    @media screen and (min-width: 1300px) {
      margin-top: 100px;
    }
  }
`
