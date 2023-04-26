import styled from 'styled-components'

export const StyledSectionBenefits = styled.div`
  width: 100vw;
  height: 56vh;

  .container {
    width: 100vw;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: var(--blue);
    padding: 20px 20px 0px 20px;
    h1 {
      font-weight: bold;
      font-size: 20px;
    }
    p {
      margin-top: 15px;
      font-size: 15px;
      font-weight: 500;
    }
    .button {
      display: flex;
      justify-content: center;

      button {
        background-color: var(--blue);
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
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
    }
    h2 {
      font-weight: 500;
    }
  }
`
