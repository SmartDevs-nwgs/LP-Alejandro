import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100vw;
  height: 280px;
  background-color: var(--blue);

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
      h1 {
        color: white;
        font-weight: 500;
        font-size: 20px;
      }
      .info-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        .white-bar {
          background-color: var(--white);
          width: 95px;
          height: 12px;
          margin-right: 3px;
        }
      }
    }

    h2 {
      font-size: 16px;
      font-weight: 500;
      color: white;
    }
    .social-midia {
      margin-top: 20px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .midia-icons {
        width: 100%;
        display: flex;
        justify-content: center;

        .instagram {
          margin-right: 10px;
          text-align: center;
        }
        .tiktok {
          margin-left: 10px;
          text-align: center;
        }
        .icon {
          font-size: 30px;
          color: var(--white);
          margin-top: 10px;
        }
      }
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
    }
  }
`
