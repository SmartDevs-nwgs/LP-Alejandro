import styled from 'styled-components'

export const StyledSectionInfo = styled.div`
  width: 100vw;
  overflow: hidden;

  .container {
    padding: 20px;
    color: var(--blue);
    @media screen and (min-width: 900px) {
      padding: 50px;
    }
    @media screen and (min-width: 1300px) {
      padding: 100px;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      text-align: center;

      @media screen and (min-width: 900px) {
        flex-direction: row;
        text-align: start;
      }
      .profile {
        width: 100px;
        height: 100px;
        @media screen and (min-width: 500px) {
          width: 130px;
          height: 130px;
        }
        @media screen and (min-width: 900px) {
          width: 150px;
          height: 150px;
        }
        @media screen and (min-width: 1300px) {
          width: 200px;
          height: 200px;
        }
      }
      h1 {
        font-size: 23px;
        font-weight: bold;
        margin-bottom: -5px;
        @media screen and (min-width: 900px) {
          margin-bottom: -20px;
        }
        @media screen and (min-width: 1300px) {
          margin-top: 50px;
          font-size: 30px;
        }
      }
      h2 {
        font-size: 21px;
        font-weight: 500;
        @media screen and (min-width: 1300px) {
          font-size: 30px;
        }
      }
    }
    ul {
      margin-top: 10px;
      padding-left: 20px;

      li {
        margin-bottom: 10px;
        font-weight: 500;
        @media screen and (min-width: 900px) {
          font-size: 18px;
        }
        @media screen and (min-width: 1300px) {
          font-size: 22px;
        }
      }
    }
    p {
      font-weight: 500;
      @media screen and (min-width: 900px) {
        margin-top: 20px;
        font-size: 18px;
      }
      @media screen and (min-width: 1300px) {
        margin-top: 25px;
        font-size: 22px;
      }
    }
    h2 {
      margin-top: 23px;
      font-weight: 500;
    }
  }
`
