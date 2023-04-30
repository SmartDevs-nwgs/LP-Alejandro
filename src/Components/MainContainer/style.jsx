import styled from 'styled-components'

export const StyledMainContainer = styled.main`
  width: 100vw;
  height: 60vh;
  background-color: var(--blue);
  color: var(--white);

  @media (min-width: 800px) {
    padding-bottom: 60px;
  }

  .container-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    padding: 20px;
    align-items: flex-end;

    .main-info {
      max-width: 308px;
      font-size: 10px;
    }

    .title {
      min-width: 308px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: 80%;
      .name {
        width: 100%;
        height: min-content;
      }
      h1 {
        font-size: 26px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .title-training {
        width: 100%;
        display: flex;
        align-items: center;
        height: min-content;
      }
      .white-bar {
        background-color: var(--white);
        height: 15px;
        width: 120px;
        margin-right: 10px;
      }
    }
    .div-button {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 80%;
      height: 80px;

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
    }
    @media (min-width: 600px) {
      flex-wrap: nowrap;
      justify-content: space-between;

      .div-button {
        width: 30%;
        align-items: end;
      }
    }
    @media (min-width: 800px) {
      padding-left: 70px;
      flex-wrap: nowrap;
      justify-content: space-between;
      .title {
        h1 {
          font-size: 30px;
        }
        .white-bar {
          width: 135px;
        }
      }
      .main-info {
        font-size: 13px;
        max-width: 400px;
      }

      .div-button {
        width: 30%;

        button {
          height: 50px;
          font-size: 12px;
        }
      }
    }
    @media (min-width: 1200px) {
      padding-left: 100px;
      justify-content: space-around;
      .title {
        width: 45%;
        h1 {
          font-size: 34px;
        }
        .white-bar {
          width: 150px;
        }
      }

      .div-button {
        width: 30%;

        button {
          height: 50px;
          font-size: 12px;
        }
      }
    }
    @media (min-width: 1300px) {
      max-width: 1300px;
      .title {
        width: 540px;
      }
      .div-button {
        width: 300px;

        button {
          height: 60px;
          font-size: 14px;
        }
      }
    }
  }
  @media (min-width: 1300px) {
    display: flex;
    justify-content: center;
  }
`
