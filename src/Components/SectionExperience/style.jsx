import styled from 'styled-components'

export const StyledSectionExperience = styled.div`
  height: 400px;
  @media screen and (min-width: 1300px) {
    display: flex;
    justify-content: center;
  }

  .background {
    @media screen and (min-width: 1300px) {
      z-index: 0;
      min-width: 1300px;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
  }

  h2 {
    padding: 20px;
    font-weight: 500;
    font-size: 20px;
    color: var(--blue);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    @media screen and (min-width: 600px) {
      flex-wrap: nowrap;
    }
    h2 {
      color: var(--white);
    }
    .one,
    .two,
    .thre,
    .four,
    .five {
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;

      .dropdown {
        display: none;
      }
    }
    .one {
      width: 50%;
      height: 175px;
      background-color: var(--blue5);
      @media screen and (min-width: 600px) {
        width: 20%;
        height: 122.8px;
      }
      @media screen and (min-width: 1200px) {
        height: 250px;
      }
    }
    .one:hover .dropdown-one {
      margin-top: 320px;
      height: 290px;
      display: flex;
      margin-left: 130px;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-one {
        width: 30px;
        position: absolute;
        margin-left: -30px;
        left: 90px;
        top: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-one {
        padding: 10px;
        border-radius: 8px;
        overflow: hidden;
        height: 250px;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .two {
      width: 50%;
      height: 175px;
      background-color: var(--blue4);
      @media screen and (min-width: 600px) {
        width: 20%;
        height: 122.8px;
      }
      @media screen and (min-width: 1200px) {
        height: 250px;
      }
    }

    .two:hover .dropdown-two {
      margin-top: 280px;
      display: flex;
      margin-right: 100px;
      height: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-two {
        width: 30px;
        position: absolute;
        right: 73px;
        top: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-two {
        padding: 10px;
        border-radius: 8px;
        height: 200px;
        overflow: hidden;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .thre {
      width: 33.34%;
      height: 116px;
      background-color: var(--blue3);
      @media screen and (min-width: 600px) {
        width: 20%;
        height: 122.8px;
      }
      @media screen and (min-width: 1200px) {
        height: 250px;
      }
    }
    .thre:hover .dropdown-thre {
      margin-top: 290px;
      display: flex;
      height: 240px;
      margin-left: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-thre {
        width: 30px;
        position: absolute;
        top: 0px;
        margin-left: -30px;
        left: 75px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-thre {
        padding: 10px;
        border-radius: 8px;
        height: 200px;
        overflow: hidden;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .four {
      width: 33.33%;
      height: 116px;
      background-color: var(--blue2);
      @media screen and (min-width: 600px) {
        width: 20%;
        height: 122.8px;
      }
      @media screen and (min-width: 1200px) {
        height: 250px;
      }
    }
    .four:hover .dropdown-four {
      margin-top: 240px;
      display: flex;
      height: 190px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-four {
        width: 30px;
        position: absolute;
        top: 0px;
        left: 130px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-four {
        padding: 10px;
        border-radius: 8px;
        height: 150px;
        overflow: hidden;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .five {
      width: 33.33%;
      height: 116px;
      background-color: var(--blue);
      @media screen and (min-width: 600px) {
        width: 20%;
        height: 122.8px;
      }
      @media screen and (min-width: 1200px) {
        height: 250px;
      }
    }
    .five:hover .dropdown-five {
      margin-top: 240px;
      display: flex;
      height: 190px;
      margin-right: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-five {
        width: 30px;
        position: absolute;
        top: 0px;
        right: 40px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-five {
        padding: 10px;
        border-radius: 8px;
        height: 150px;
        overflow: hidden;
        width: 280px;
        background-color: var(--grey);
      }
    }
  }

  @media screen and (min-width: 900px) {
    h2 {
      font-size: 28px;
    }
  }
`
