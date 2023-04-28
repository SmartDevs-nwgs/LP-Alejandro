import styled from 'styled-components'

export const StyleCarousel = styled.section`
  color: var(--blue);
  .title-carousel {
    padding: 60px 0 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .left-arrow {
    cursor: pointer;
    font-size: 30px;
    margin-top: 120px;
    margin-left: 6%;
    position: absolute;
    z-index: 1;
  }
  .right-arrow {
    cursor: pointer;
    font-size: 30px;
    position: absolute;
    margin-top: 120px;
    margin-left: 84%;
    z-index: 1;
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
  }
  .list-cards {
    color: var(--black);
    min-width: 10000px;
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
  .card {
    min-width: 100vw;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      border: 1px solid black;
      background-color: var(--white);
      float: left;
      display: flex;
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
  @media (min-width: 700px) {
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
      background-color: var(--grey1);

      .icons {
        width: 300px;
        font-size: 30px;
        position: relative;
        right: 10px;
      }
      h2 {
        font-size: 14px;
      }
      button {
        padding-top: 10px;
        border: none;
        background: none;
        font-weight: 700;
        font-size: 18px;
        color: var(--blue);
        transform: scale(1);
        transition-duration: 300ms;
        transition-timing-function: ease-in;
      }
      button:hover {
        transform: scale(1.1);
        transition-duration: 300ms;
        transition-timing-function: ease-in;
        text-decoration: underline;
      }
    }
  }
`
