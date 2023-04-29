import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100vw;
  background-color: var(--blue);
  overflow: hidden;
  @media screen and (min-width: 1300px) {
    height: 350px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    .logo {
      width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (min-width: 1300px) {
        position: absolute;
        left: -90px;
      }
      h1 {
        color: white;
        font-weight: 500;
        font-size: 20px;
        @media screen and (min-width: 1300px) {
          font-size: 22px;
        }
      }
      .info-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        .white-bar {
          background-color: var(--white);
          width: 100px;
          height: 12px;
          margin-right: 3px;
          @media screen and (min-width: 1300px) {
            width: 100px;
          }
        }
      }
    }

    h2 {
      font-size: 16px;
      font-weight: 500;
      color: white;
      @media screen and (min-width: 1300px) {
        font-size: 18px;
      }
    }
    .social-midia {
      margin-top: 20px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      @media screen and (min-width: 1300px) {
        gap: 40px;
        width: 40%;
      }

      .midia-icons {
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        @media screen and (min-width: 1300px) {
          gap: 25px;
          justify-content: center;
        }

        .instagram {
          cursor: pointer;
          margin-right: 15px;
          text-align: center;
          transform: scale(1);
          transition-duration: 500ms;
          transition-delay: 0ms;
          @media screen and (min-width: 1300px) {
            margin-right: 100px;
            position: absolute;
          }
        }
        .instagram:hover {
          transform: scale(1.1);
          transition-duration: 500ms;
          transition-delay: 0ms;
        }
        .tiktok {
          cursor: pointer;
          margin-left: 15px;
          text-align: center;
          transform: scale(1);
          transition-duration: 500ms;
          transition-delay: 0ms;

          @media screen and (min-width: 1300px) {
            margin-left: 100px;
            bottom: 5px;
            position: relative;
          }

          h2 {
            margin-top: -3px;
          }
          .tiktok-img {
            margin-top: 4px;
            width: 50px;
            height: 50px;
            z-index: 2;
            @media screen and (min-width: 1300px) {
              margin-top: 10px;
              width: 50px;
              height: 50px;
            }
          }
        }
        .tiktok:hover {
          transform: scale(1.1);
          transition-duration: 500ms;
          transition-delay: 0ms;
          font-weight: bold;
        }

        .icon {
          font-size: 40px;
          color: var(--white);
          margin-top: 10px;
          z-index: 2;
        }
      }
    }
    span {
      cursor: pointer;
    }
    .copyright {
      width: 100vw;
      color: white;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 1300px) {
        font-size: 16px;
        padding: 28px;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 55px;
      }
    }
  }
`
