import styled from 'styled-components'

export const StyledSectionSessions = styled.div`
  width: 100vw;
  overflow: hidden;

  .brain-icon {
    color: white;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    position: relative;
    right: 10px;
    bottom: 10px;
    @media (min-width: 450px) {
      right: 20px;
    }
    @media screen and (min-width: 900px) {
      width: 70px;
      height: 70px;
      right: 40px;
    }
    @media screen and (min-width: 1300px) {
      left: auto;
    }
  }
  .heart-icon {
    color: white;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    position: relative;
    bottom: 10px;
    @media screen and (min-width: 600px) {
      left: 18px;
    }
    @media screen and (min-width: 900px) {
      z-index: 2;
      bottom: 0;
      top: 18px;
      width: 70px;
      height: 70px;
    }
  }
  h1 {
    font-size: 20px;
    color: var(--blue);
    padding: 15px;

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
    justify-content: center;

    background-color: var(--blue1);
    height: 280px;
    z-index: 1;

    @media screen and (min-width: 600px) {
      width: 50%;
      height: 330px;
    }
    @media screen and (min-width: 900px) {
      height: 370px;
      padding: 0;

      padding: 50px;
    }

    p {
      padding-top: 20px;
      font-size: 15px;

      color: var(--white);
      width: 100%;
      @media screen and (min-width: 450px) {
        width: 70%;
        position: relative;
        right: 20px;
      }
      @media (min-width: 900px) {
        font-size: 17px;
      }
    }
  }
  .time-section {
    padding: 20px;
    height: 280px;
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      padding: 5px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    @media screen and (min-width: 600px) {
      width: 50%;
      height: 330px;
      justify-content: space-between;
    }
    @media screen and (min-width: 900px) {
      height: 370px;
      padding: 0;
    }
    .info-time-section {
      display: flex;
      overflow: hidden;

      p {
        width: 280px;
        color: white;
        font-size: 15px;
        position: relative;
        top: 5px;
        @media screen and (min-width: 450px) {
          width: 70%;
        }
        @media screen and (min-width: 600px) {
          left: 30px;
        }
        @media screen and (min-width: 900px) {
          font-size: 17px;
          padding-top: 50px;
          padding-left: 20px;
        }
      }
    }
    .div-button {
      padding-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;

      button {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        position: absolute;
        height: 40px;
        border-radius: 4px;
        font-weight: 500;
        border: none;
        font-size: 10px;
        padding: 10px 20px;
        color: var(--blue);
        background-color: var(--white);
        transform: scale(1);
        transition-duration: 500ms;
        transition-delay: 0ms;
        svg {
          color: var(--blue2);
          font-size: 17px;
          transform: scale(1);
          transition-duration: 500ms;
          transition-delay: 0ms;
        }
      }
      button:hover {
        transform: scale(1.1);
        transition-duration: 500ms;
        transition-delay: 0ms;
        font-weight: bold;
        svg {
          transform: scale(1.1);
          transition-duration: 500ms;
          transition-delay: 0ms;
        }
      }
      @media (min-width: 900px) {
        padding-top: 0;
        margin-bottom: 50px;

        button {
          height: 50px;
          padding: 10px 30px;
          font-size: 12px;
        }
      }
    }
  }
  @media (min-width: 1300px) {
    .free-section {
      justify-content: end;
      p {
        width: 375px;
      }
    }
    .time-section {
      display: flex;

      .info-time-section {
        justify-content: start;
        div {
          justify-content: start;
        }

        p {
          padding: 50px 0px 0px 20px;
          width: 375px;
        }
      }
      .div-button {
        width: 375px;
      }
    }
    .title-sessions {
      width: 100%;
      display: flex;
      justify-content: center;

      h1 {
        width: 1300px;
      }
    }
  }

  /* animações */

  [data-anime] {
    opacity: 0;
    transition: 2s;
  }

  [data-anime='up'] {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  [data-anime='left'] {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  [data-anime='right'] {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }

  [data-anime].animate {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
