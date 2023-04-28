import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100vw;
  height: 250px;
  background-color: var(--blue);
  @media screen and (min-width: 1300px) {
    height: 500px;
    overflow: hidden;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    .logo {
      width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media screen and (min-width: 1300px) {
        position: absolute;
        left: -70px;
      }
      h1 {
        color: white;
        font-weight: 500;
        font-size: 20px;
        @media screen and (min-width: 1300px) {
          font-size: 26px;
        }
      }
      .info-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        .white-bar {
          background-color: var(--white);
          width: 150px;
          height: 12px;
          margin-right: 3px;
          @media screen and (min-width: 1300px) {
            width: 120px;
          }
        }
      }
    }

    h2 {
      font-size: 16px;
      font-weight: 500;
      color: white;
      @media screen and (min-width: 1300px) {
        font-size: 26px;
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
        justify-content: space-around;

        .instagram {
          cursor: pointer;
          margin-right: 10px;
          text-align: center;
        }
        .tiktok {
          cursor: pointer;
          margin-left: 10px;
          text-align: center;
          @media screen and (min-width: 1300px) {
            margin-bottom: 10px;
            position: relative;
            bottom: 5px;
          }
          h2 {
            margin-top: -3px;
          }
          .tiktok-img {
            margin-top: 4px;
            width: 50px;
            height: 50px;
            @media screen and (min-width: 1300px) {
              width: 80px;
              height: 80px;
            }
          }
        }

        .icon {
          font-size: 40px;
          color: var(--white);
          margin-top: 10px;
          @media screen and (min-width: 1300px) {
            font-size: 60px;
          }
        }
      }
    }
    span {
      cursor: pointer;
    }
    .copyright {
      margin-top: 8px;
      width: 100vw;
      color: white;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 1300px) {
        font-size: 20px;
        padding: 28px;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 65px;
      }
    }
  }
`
