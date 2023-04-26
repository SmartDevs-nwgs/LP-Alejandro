import styled from 'styled-components'

export const StyledSectionInfo = styled.div`
  width: 100vw;
  height: 80vh;

  .container {
    padding: 20px;
    color: var(--blue);

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      text-align: center;
      .profile {
        width: 100px;
        height: 100px;
      }
      h1 {
        font-size: 23px;
        font-weight: bold;
        margin-bottom: -5px;
      }
      h2 {
        font-size: 21px;
        font-weight: 500;
      }
    }
    ul {
      list-style: circle;
      margin-top: 10px;
      padding-left: 20px;

      li {
        margin-bottom: 10px;
        font-weight: 500;
      }
    }
    p {
      font-weight: 500;
    }
    h2 {
      margin-top: 23px;
      font-weight: 500;
    }
  }
`
