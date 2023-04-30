import styled from 'styled-components'

export const StyledSectionBenefits = styled.div`
  width: 100vw;
  height: 800px;
  color: var(--blue);
  margin-top: 50px;

  @media screen and (min-width: 500px) {
    height: 700px;
  }
  @media screen and (min-width: 700px) {
    height: 600px;
  }
  @media screen and (min-width: 900px) {
    height: 700px;
  }

  .container-benefits {
    width: 100%;
    .post-one-info {
      animation: contentUp 3s 0s 1 normal forwards;
    }
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

  @keyframes contentUp {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
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
`
