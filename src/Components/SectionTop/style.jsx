import styled from 'styled-components'

export const StyledSectionTop = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: var(--blue);

  .container {
    height: 100%;
    padding: 0px 20px 50px 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    button {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--blue);
      padding: 10px;
      width: 159px;
      font-size: 12px;
      border: none;
      font-weight: bold;
      .whatsapp-icon {
        font-size: 14px;
        font-weight: bold;
        margin-left: 3px;
      }
    }
    .info {
      width: 300px;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .info-name {
        color: var(--white);
        font-size: 19px;
        letter-spacing: 5px;
      }
      .info-bar {
        width: 300px;
        display: flex;
        text-align: center;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 8px;
        .white-bar {
          background-color: var(--white);
          width: 138px;
          height: 12px;
          margin-right: 3px;
        }
        .info-bar-formation {
          color: var(--white);
          font-size: 17px;
          letter-spacing: 5px;
        }
      }
      p {
        color: var(--white);
        font-size: 14px;
      }
    }
  }
`
