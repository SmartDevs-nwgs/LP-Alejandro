import styled from 'styled-components'

export const StyledSectionExperience = styled.div`
  width: 100vw;
  height: 400px;

  h2 {
    padding: 20px;
    font-weight: 500;
    font-size: 20px;
    color: var(--blue);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
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
    }
    .one:hover .dropdown-one {
      margin-top: 345px;
      left: 60px;
      display: flex;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-one {
        width: 30px;
        position: absolute;
        left: 20px;
        top: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-one {
        padding: 10px;
        border-radius: 4px;
        height: 250px;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .two {
      width: 50%;
      height: 175px;
      background-color: var(--blue4);
    }

    .two:hover .dropdown-two {
      margin-top: 290px;
      left: 80px;
      display: flex;
      height: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      .triangle-two {
        width: 30px;
        position: absolute;
        top: 0;
        left: 200px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-two {
        padding: 10px;
        border-radius: 4px;
        height: 200px;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .thre {
      width: 33.34%;
      height: 116px;
      background-color: var(--blue3);
    }
    .thre:hover .dropdown-thre {
      margin-top: 290px;
      left: 20px;
      display: flex;
      height: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-thre {
        width: 30px;
        position: absolute;
        top: 0px;
        left: 32px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-thre {
        padding: 10px;
        border-radius: 4px;
        height: 200px;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .four {
      width: 33.33%;
      height: 116px;
      background-color: var(--blue2);
    }
    .four:hover .dropdown-four {
      margin-top: 240px;
      left: 40px;
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
        left: 140px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-four {
        padding: 10px;
        border-radius: 4px;
        height: 150px;
        width: 280px;
        background-color: var(--grey);
      }
    }

    .five {
      width: 33.33%;
      height: 116px;
      background-color: var(--blue);
    }
    .five:hover .dropdown-five {
      margin-top: 240px;
      left: 85px;
      display: flex;
      height: 190px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      .triangle-five {
        width: 30px;
        position: absolute;
        top: 0px;
        left: 230px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
      }
      .dropdown-content-five {
        padding: 10px;
        border-radius: 4px;
        height: 150px;
        width: 280px;
        background-color: var(--grey);
      }
    }
  }
`
