import styled from 'styled-components'

export const StyledSectionSessions = styled.div`
  width: 100vw;
  overflow: hidden;

  .container {
    @media screen and (min-width: 600px) {
      display: flex;
    }
  }
  h2 {
    font-weight: 500;
    padding: 10px 0px 15px 20px;
    color: var(--blue);
  }

  .free-section {
    padding: 20px;
    display: flex;
    background-color: var(--blue1);
    height: 280px;

    @media screen and (min-width: 600px) {
      width: 50%;
      height: 400px;
    }
    @media screen and (min-width: 1300px) {
      height: 600px;
      padding: 100px;
    }

    p {
      font-size: 15px;
      color: var(--white);
      width: 100%;
      @media screen and (min-width: 500px) {
        font-size: 17px;
      }
      @media screen and (min-width: 900px) {
        font-size: 22px;
      }
      @media screen and (min-width: 1300px) {
        font-size: 24px;
      }
    }
    .icon {
      display: flex;

      .brain-icon {
        margin-left: 10px;
        width: 50px;
        height: 50px;
        @media screen and (min-width: 1300px) {
          width: 80px;
          height: 80px;
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
      height: 600px;
      padding: 100px;
    }
    .info-time-section {
      display: flex;
      overflow: hidden;

      p {
        width: 280px;
        color: white;
        font-size: 15px;
        width: 100%;
        @media screen and (min-width: 500px) {
          font-size: 17px;
        }
        @media screen and (min-width: 900px) {
          font-size: 22px;
        }
        @media screen and (min-width: 1300px) {
          font-size: 24px;
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
            width: 80px;
            height: 80px;
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
          width: 260px;
          font-size: 18px;
          padding: 20px;
          margin-left: 5px;
        }
        .whatsapp-icon {
          font-size: 14px;
          font-weight: bold;
          margin-left: 3px;
          margin-top: 1px;
          @media screen and (min-width: 600px) {
            font-size: 25px;
            margin-left: 8px;
          }
        }
      }
    }
  }
`
