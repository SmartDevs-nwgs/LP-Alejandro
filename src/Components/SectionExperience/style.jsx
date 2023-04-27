import styled from 'styled-components'

export const StyledSectionExperience = styled.div`
  width: 100vw;
  height: 100vh;

  .container {
    display: flex;
    flex-wrap: wrap;
    .one,
    .two,
    .thre,
    .four,
    .five {
      color: var(--white);
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
      background-color: var(--blue);
    }
    .one:hover .dropdown-one {
      color: black;
      padding: 8px;
      border-radius: 8px;
      margin-left: 180px;
      margin-top: 400px;
      width: 300px;
      display: block;
      position: absolute;
      background-color: var(--grey);

      .triangle-one {
        left: 20px;
        width: 50px;
        position: relative;
        top: -10px;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 30px solid var(--black);
      }
    }

    .two {
      width: 50%;
      height: 175px;
      background-color: var(--blue2);
    }
    .two:hover .dropdown-two {
      color: black;
      padding: 8px;
      margin-right: 150px;
      margin-top: 300px;
      width: 300px;
      display: block;
      position: absolute;
      background-color: var(--grey);
      border-radius: 4px;
      .triangle-two {
        width: 50px;
        position: relative;
        bottom: 20px;
        left: 200px;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 20px solid var(--grey);
      }
    }
    .thre {
      width: 33.34%;
      height: 116px;
      background-color: var(--blue3);
    }
    .thre:hover .dropdown-thre {
      color: black;
      padding: 8px;
      margin-left: 230px;
      margin-top: 340px;
      width: 300px;
      display: block;
      position: absolute;
      background-color: var(--grey);
      border-radius: 4px;
      .triangle-thre {
        width: 50px;
        position: relative;
        bottom: 20px;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 20px solid var(--grey);
      }
    }
    .four {
      width: 33.33%;
      height: 116px;
      background-color: var(--blue4);
    }
    .four:hover .dropdown-four {
      color: black;
      padding: 8px;
      margin-left: 0px;
      margin-top: 260px;
      width: 300px;
      display: block;
      position: absolute;
      background-color: var(--grey);
      border-radius: 4px;
      .triangle-four {
        width: 50px;
        position: relative;
        bottom: 20px;
        left: 115px;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 20px solid var(--grey);
      }
    }
    .five {
      width: 33.33%;
      height: 116px;
      background-color: var(--blue5);
    }
    .five:hover .dropdown-five {
      color: black;
      padding: 8px;
      margin-right: 230px;
      margin-top: 280px;
      width: 300px;
      display: block;
      position: absolute;
      background-color: var(--grey);
      border-radius: 4px;
      .triangle-five {
        width: 50px;
        position: relative;
        bottom: 20px;
        left: 230px;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 20px solid var(--grey);
      }
    }
  }
`
