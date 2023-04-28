import styled from 'styled-components'

export const StyledSectionSessions = styled.div`
  width: 100vw;
  overflow: hidden;
  @media screen and (min-width: 600px) {
    display: flex;
  }

  h2 {
    font-weight: 500;
    padding: 10px 0px 15px 20px;
    color: var(--blue);
  }

  .free-section {
    overflow: hidden;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    background-color: var(--blue1);
    height: 260px;

    @media screen and (min-width: 600px) {
      width: 50%;
      height: 400px;
    }
    @media screen and (min-width: 1300px) {
      width: 50%;
      height: 600px;
      padding: 50px;
    }

    p {
      height: 260px;
      width: 280px;
      font-size: 15px;
      margin-top: 15px;
      color: var(--white);
      @media screen and (min-width: 500px) {
        font-size: 17px;
        width: 100%;
        height: 100%;
      }
      @media screen and (min-width: 900px) {
        font-size: 22px;
      }
      @media screen and (min-width: 1300px) {
        font-size: 32px;
        width: 600px;
      }
    }
    .icon {
      display: flex;
      margin-top: 10px;
      .brain-icon {
        margin-bottom: 25px;
        margin-right: 5px;
        width: 50px;
        height: 50px;
        @media screen and (min-width: 1300px) {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  .time-section {
    padding: 20px;
    height: 260px;
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media screen and (min-width: 600px) {
      width: 50%;
      height: 400px;
      justify-content: space-between;
    }
    @media screen and (min-width: 1300px) {
      padding: 50px;
      width: 50%;
      height: 600px;
    }
    .info-time-section {
      display: flex;
      height: 260px;
      overflow: hidden;
      @media screen and (min-width: 1300px) {
        height: 550px;
      }
      p {
        margin-left: 10px;
        width: 280px;
        margin-top: 15px;
        color: white;
        font-size: 15px;

        @media screen and (min-width: 500px) {
          font-size: 17px;
          width: 100%;
          height: 100%;
        }
        @media screen and (min-width: 900px) {
          font-size: 22px;
        }
        @media screen and (min-width: 1300px) {
          font-size: 32px;
          width: 500px;
        }
      }
      .icon {
        display: flex;
        margin-top: 10px;
        .heart-icon {
          margin-right: 10px;
          width: 50px;
          height: 50px;
          @media screen and (min-width: 1300px) {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
    .button {
      display: flex;
      justify-content: center;

      button {
        cursor: pointer;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--blue);
        border: none;
        font-weight: bold;
        overflow: hidden;

        @media screen and (min-width: 600px) {
          font-size: 15px;
          margin-bottom: 30px;
        }
        @media screen and (min-width: 1300px) {
          width: 350px;
          font-size: 24px;
          padding: 20px;
          margin-left: 5px;
        }
        .whatsapp-icon {
          font-size: 14px;
          font-weight: bold;
          margin-left: 3px;
          margin-top: 1px;
          @media screen and (min-width: 600px) {
            font-size: 20px;
            margin-left: 3px;
          }
        }
      }
    }
  }
`
