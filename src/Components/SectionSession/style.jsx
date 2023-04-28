import styled from 'styled-components'

export const StyledSectionSessions = styled.div`
  width: 100vw;

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
    justify-content: center;
    background-color: var(--blue1);
    height: 260px;

    @media screen and (min-width: 600px) {
      width: 50%;
      height: 300px;
    }
    @media screen and (min-width: 600px) {
      width: 50%;
      height: 400px;
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
    }
    .icon {
      display: flex;
      margin-top: 10px;
      .brain-icon {
        margin-bottom: 25px;
        margin-right: 5px;
        width: 50px;
        height: 50px;
      }
    }
  }
  .time-section {
    padding: 20px;
    height: 260px;
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 600px) {
      width: 50%;
      height: 300px;
    }
    @media screen and (min-width: 600px) {
      width: 50%;
      height: 400px;
    }
    .info-time-section {
      display: flex;
      height: 260px;
      overflow: hidden;
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
      }
      .icon {
        display: flex;
        margin-top: 10px;
        .heart-icon {
          margin-right: 10px;
          width: 50px;
          height: 50px;
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

        @media screen and (min-width: 500px) {
          font-size: 15px;
        }
        .whatsapp-icon {
          font-size: 14px;
          font-weight: bold;
          margin-left: 3px;
          margin-top: 1px;
        }
      }
    }
  }
`
