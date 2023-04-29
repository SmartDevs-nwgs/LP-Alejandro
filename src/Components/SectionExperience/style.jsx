import styled from 'styled-components'

export const StyledSectionExperience = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, var(--blue5) 0%, var(--blue) 100%);

  .background {
    z-index: 0;
    min-width: 1300px;
    justify-content: center;
    display: flex;
    flex-direction: column;
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
      margin-top: 345px;
      left: 60px;
      display: flex;
      height: 300px;
      justify-content: center;
      align-items: center;
      position: absolute;
      @media screen and (min-width: 600px) {
        left: 8%;
      }

      .triangle-one {
        width: 30px;
        position: absolute;
        top: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
        @media screen and (min-width: 500px) {
          left: 10px;
        }
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
      @media screen and (min-width: 600px) {
        width: 20%;
        height: 122.8px;
      }
      @media screen and (min-width: 1200px) {
        height: 250px;
      }
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
      @media screen and (min-width: 500px) {
        left: 200px;
      }
      @media screen and (min-width: 600px) {
        left: 80px;
      }
      @media screen and (min-width: 900px) {
        left: 150px;
      }
      @media screen and (min-width: 1000px) {
        left: 200px;
      }
      @media screen and (min-width: 1300px) {
        left: 270px;
      }

      .triangle-two {
        width: 30px;
        position: absolute;
        top: 0;
        left: 200px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
        @media screen and (min-width: 500px) {
          left: 200px;
        }
        @media screen and (min-width: 600px) {
          left: 100px;
        }
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
      left: 20px;
      display: flex;
      height: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      @media screen and (min-width: 600px) {
        left: 30%;
      }
      @media screen and (min-width: 900px) {
        left: 320px;
      }
      @media screen and (min-width: 1000px) {
        left: 380px;
      }
      @media screen and (min-width: 1300px) {
        left: 530px;
      }

      .triangle-thre {
        width: 30px;
        position: absolute;
        left: 0px;
        top: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 25px solid var(--grey);
        @media screen and (min-width: 500px) {
          left: 120px;
        }
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
      left: 40px;
      display: flex;
      height: 190px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      @media screen and (min-width: 500px) {
        left: 30%;
      }
      @media screen and (min-width: 600px) {
        left: 45%;
      }
      @media screen and (min-width: 900px) {
        left: 53%;
      }
      @media screen and (min-width: 1000px) {
        left: 55%;
      }
      @media screen and (min-width: 1300px) {
        left: 58%;
      }

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
      left: 85px;
      display: flex;
      height: 190px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      @media screen and (min-width: 500px) {
        left: 40%;
      }
      @media screen and (min-width: 600px) {
        left: 53%;
      }
      @media screen and (min-width: 900px) {
        left: 60%;
      }
      @media screen and (min-width: 1000px) {
        left: 65%;
      }
      @media screen and (min-width: 1300px) {
        left: 70%;
      }

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

  @media screen and (min-width: 1300px) {
    h2 {
      font-size: 28px;
    }
  }
`
