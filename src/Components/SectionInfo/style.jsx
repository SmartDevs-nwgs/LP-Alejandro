import styled from 'styled-components'

export const StyledSectionInfo = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .container {
    padding: 20px;

    border-radius: 12px;
    color: var(--blue);
    @media screen and (min-width: 900px) {
      border: 1px solid #e0e0e0;
      box-shadow: 0px 1px 8px -2px #989898;
      -moz-box-shadow: 0px 1px 8px -2px #989898;
      -webkit-box-shadow: 0px 1px 10px -2px #989898;
      margin: 10px 0px 10px 0px;
      padding-bottom: 50px;
    }
    @media screen and (min-width: 1300px) {
      padding-bottom: 100px;
    }
    @media screen and (min-width: 1300px) {
      padding: 50px;
      max-width: 1050px;
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
          font-size: 26px;
        }
      }
      h2 {
        font-size: 21px;
        font-weight: 500;
        @media screen and (min-width: 1300px) {
          font-size: 26px;
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
      }
    }
    p {
      font-weight: 500;
      @media screen and (min-width: 900px) {
        margin-top: 20px;
        font-size: 18px;
        max-width: 1050px;
      }
    }
    h2 {
      margin-top: 23px;
      font-weight: 500;
    }
  }

  /* animations */

  [data-anime] {
    opacity: 0;
    transition: 3s;
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
