import styled from 'styled-components'

export const StyleCarousel = styled.section`
  color: var(--blue);
  padding-bottom: 100px;
  .title-carousel {
    padding: 60px 0 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 500;

      @media (min-width: 900px) {
        font-size: 28px;
      }
    }
  }
  .left-arrow {
    cursor: pointer;
    font-size: 30px;
    margin-top: 120px;
    margin-left: 6%;
    position: absolute;
    z-index: 1;
    @media (min-width: 900px) {
      font-size: 38px;
    }
    @media (min-width: 1300px) {
      margin-left: 16%;
    }
    @media (min-width: 1800px) {
      margin-left: 18%;
    }
  }
  .right-arrow {
    cursor: pointer;
    font-size: 30px;
    position: absolute;
    margin-top: 120px;
    margin-left: 87%;
    z-index: 1;
    @media (min-width: 700px) {
      margin-left: 90%;
    }
    @media (min-width: 900px) {
      font-size: 38px;
    }
    @media (min-width: 1300px) {
      margin-left: 81.5%;
    }
    @media (min-width: 1800px) {
      margin-left: 79%;
    }
  }
  .progression-bar {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    .bar {
      box-shadow: 0px 1px 8px -1px #989898;
      -moz-box-shadow: 0px 1px 8px -1px #989898;
      -webkit-box-shadow: 0px 1px 8px -1px #989898;
      border-radius: 8px;
      width: 200px;
      height: 20px;
      background-color: var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      @media (min-width: 700px) {
        width: 130px;
      }
      @media (min-width: 1000px) {
        width: 90px;
      }
      div {
        cursor: pointer;
        width: 15px;
        height: 15px;
        border-radius: 8px;
        background-color: var(--grey1);
      }
      .active {
        background-color: var(--blue);
      }
    }
  }
  .wrapper {
    position: relative;
    width: 100%;
    overflow-x: auto;
    justify-content: center;
  }
  .wrapper::-webkit-scrollbar {
    display: none;
  }
  .list-cards {
    color: var(--black);
    min-width: 10000px;
    overflow-x: auto;
    height: 300px;
    display: flex;
    transform-style: preserve-3d;
    perspective: 800px;

    .cloud {
    }
    .anxiety,
    .no-drink,
    .punch {
      color: var(--black);
    }
    .stress,
    .heart,
    .broken-heart {
      color: var(--red);
    }
  }
  .list-cards::-webkit-scrollbar {
    display: none;
  }
  .cards-div1,
  .cards-div2,
  .cards-div3,
  .cards-div4 {
    min-width: 100vw;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
  }

  .card {
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--blue);

    @media (min-width: 700px) {
      min-width: 40%;
    }
    @media (min-width: 1000px) {
      min-width: 25vw;
    }
    @media (min-width: 1300px) {
      min-width: 20vw;
    }
    @media (min-width: 1800px) {
      min-width: 15vw;
    }
    div {
      border: 1px solid black;
      background-color: var(--white);
      float: left;
      display: flex;
      gap: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 10px;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 1px 8px -2px #989898;
      -moz-box-shadow: 0px 1px 8px -2px #989898;
      -webkit-box-shadow: 0px 1px 8px -2px #989898;
      width: 200px;

      height: 200px;

      svg {
        font-size: 25px;
      }
    }
  }
  .consultation {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 20px 0;

    .content-consultation {
      padding: 25px 10px 25px 10px;
      text-align: center;
      border-radius: 8px;
      width: 300px;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 1px 8px -2px #989898;
      -moz-box-shadow: 0px 1px 8px -2px #989898;
      -webkit-box-shadow: 0px 1px 8px -2px #989898;

      .icons {
        width: 300px;
        font-size: 30px;
        position: relative;
        right: 10px;
      }
      h2 {
        font-size: 14px;
      }
      .link {
        transform: scale(1);
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        padding-top: 10px;
      }
      a {
        cursor: pointer;
        border: none;
        font-weight: 700;
        font-size: 18px;
        color: var(--blue);
        text-decoration: none;
      }

      .link:hover {
        transform: scale(1.1);
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        text-decoration: underline;
      }
      @media (min-width: 900px) {
        width: 500px;
        padding: 25px 10px 30px 10px;

        .icons {
          width: 500px;
          font-size: 40px;
        }
        h2 {
          font-size: 18px;
        }
        button {
          padding-top: 20px;
          font-size: 22px;
        }
      }
    }
  }
`
