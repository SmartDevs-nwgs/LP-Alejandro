import styled from 'styled-components'

export const StyledSectionBenefits = styled.div`
  width: 100vw;
  height: 700px;
  color: var(--blue);
  margin-top: 50px;

  .container-benefits {
    width: 100%;

    .info {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .post-one,
      .post-two {
        width: 100%;
        padding: 20px;

        h1 {
          font-weight: 500;
          padding-bottom: 15px;
          font-size: 24px;
        }
        p {
          font-size: 15px;
        }
      }
      @media (min-width: 500px) {
        .post-one,
        .post-two {
          width: 85%;
        }
      }
      @media (min-width: 700px) {
        .post-one,
        .post-two {
          width: 590px;
        }
      }
      @media (min-width: 900px) {
        .post-one,
        .post-two {
          width: 90%;
          display: flex;
          justify-content: center;
          gap: 90px;
          .image {
            display: flex;
            align-items: center;
          }
          img {
            width: 290px;
            height: 300px;
            position: relative;
          }
          .post-one-info {
            width: 50%;
          }
          h1 {
            font-size: 26px;
          }
          p {
            letter-spacing: -0.5px;
            font-size: 16px;
          }
        }
        .post-two {
          min-height: 200px;
          .post-two-info {
            width: 50%;
            height: fit-content;
          }
          .image {
            width: 290px;
            height: 200px;
          }
        }
      }
    }
  }
  @media (min-width: 1300px) {
    display: flex;
    justify-content: center;
    .container-benefits {
      display: flex;
      justify-content: center;
    }
    .info {
      max-width: 1275px;

      .post-one,
      .post-two {
        width: 1148px;

        h1,
        p {
          width: 555px;
        }
      }
    }
  }

  /* animação */

  [data-anime] {
    opacity: 0;
    transition: 2s;
  }

  [data-anime='up'] {
    transform: translate3d(0, -110%, 0);
    opacity: 1;
  }
  [data-anime='left'] {
    transform: translate3d(-100%, 0, 0);
    opacity: 1;
  }

  [data-anime].animate {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
