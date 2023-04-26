import styled from 'styled-components'

export const StyledSectionSessions = styled.div`
  width: 100vw;

  .free-section {
    height: 260px;
    padding: 20px;
    display: flex;
    background-color: var(--blue1);

    p {
      width: 280px;
      font-size: 15px;
      margin-top: 15px;
      color: var(--white);
    }
    .icon {
      display: flex;
      .brain-icon {
        margin-bottom: 30px;
        margin-right: 5px;
        width: 50px;
        height: 50px;
      }
    }
  }
  .time-section {
    padding: 20px;
    background-color: var(--blue);
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .info-time-section {
      display: flex;

      p {
        margin-left: 10px;
        width: 280px;
        margin-top: 15px;
        color: white;
        font-size: 15px;
      }
      .icon {
        display: flex;
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
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--blue);
        border: none;
        font-weight: bold;
        .whatsapp-icon {
          font-size: 14px;
          font-weight: bold;
          margin-left: 3px;
        }
      }
    }
  }
`
