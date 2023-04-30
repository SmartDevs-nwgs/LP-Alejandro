import styled from 'styled-components'

export const StyledSectionSessions = styled.div`
  width: 100vw;
  overflow: hidden;

  .brain-icon {
    color: white;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    @media screen and (min-width: 900px) {
      position: relative;
      z-index: 2;
      top: 110px;
      width: 100px;
      height: 100px;
    }
  }
  h1 {
    font-size: 20px;
    color: var(--blue);
    padding: 15px;
    animation: about 2s 0s 1 normal forwards;

    @media screen and (min-width: 900px) {
      font-size: 28px;
      padding-left: 70px;
      padding-bottom: 25px;
    }
  }
  .alt {
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
    z-index: 1;

    @media screen and (min-width: 600px) {
      width: 50%;
      height: 400px;
    }
    @media screen and (min-width: 900px) {
      height: 500px;
      padding: 0;
      justify-content: center;
      padding: 50px;
      padding-left: 110px;
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
    @media screen and (min-width: 900px) {
      height: 500px;
      padding: 0;
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
          padding-top: 50px;
          padding-left: 20px;
        }
      }
    }
    .button {
      display: flex;
      justify-content: center;
      button:hover {
        transform: scale(1.1);
        transition-duration: 500ms;
        transition-delay: 0ms;
      }
      button {
        cursor: pointer;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--blue);
        border: none;
        font-weight: bold;
        transform: scale(1);
        transition-duration: 500ms;
        transition-delay: 0ms;

        @media screen and (min-width: 600px) {
          font-size: 15px;
          margin-bottom: 30px;
        }
        @media screen and (min-width: 900px) {
          width: 220px;
          font-size: 14px;
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
            margin-left: 8px;
          }
        }
      }
    }
  }
  .heart-icon {
    color: white;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    @media screen and (min-width: 900px) {
      position: relative;
      right: 13px;
      z-index: 2;
      width: 100px;
      height: 100px;
    }
  }
  @keyframes about {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
