import styled from "@emotion/styled";

export const MainStyle = styled.div`
  background-color: #222;
  main {
    position: relative;
    z-index: 1;
    header {
      display: inline-block;
      position: relative;
      width: 100%;
      .text {
        position: relative;
        padding: 0 40px;
        padding: 330px 40px 38px;

        width: 100%;
        z-index: 3;
        h1 {
          font-size: 30px;
          color: #fff;
          line-height: 1.33;
          letter-spacing: -0.9px;
          text-align: left;
        }
        p {
          margin-top: 18px;
          font-size: 13px;
          color: #fff;
          line-height: 1.54;
          letter-spacing: -0.26px;
          text-align: left;
        }
      }
      .cover {
        position: absolute;
        width: 100%;
        height: 518px;
        bottom: 0px;
        left: 0px;
        z-index: 2;
        background: linear-gradient(
          180deg,
          rgba(34, 34, 34, 0) 30%,
          rgba(34, 34, 34, 0.8) 100%
        );
      }
    }

    & > ul {
      background-color: rgba(34, 34, 34, 0.8);
      padding: 0 30px 130px;
      & > li {
        padding: 35px 9px;
        border-top: 1px dashed #4e4e4e;
        &:last-of-type {
          border-bottom: 1px dashed #4e4e4e;
        }
        & > h2 {
          padding-left: 2px;
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          line-height: 2;
          text-align: left;
        }
        & > .location {
          display: flex;
          flex-wrap: wrap;
          .text {
            color: #fff;
            font-size: 12px;
          }
          button {
            margin-left: auto;
            width: 30px;
            height: 15px;
            border-radius: 15px;
            background-color: #4e4e4e;
            color: #fff;
            font-size: 9px;
            border: 0px;
          }
          .map_wrap {
            margin-top: 26px;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            overflow: hidden;
            .default {
              display: flex;
              width: 100%;
              height: 100%;
              background-color: #393939;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              text-align: center;
              .text {
                & > h2 {
                  width: 100%;
                  color: #fff;
                  font-size: 13px;
                  letter-spacing: -0.26px;
                }
                & > p {
                  width: 100%;
                  margin-top: 15px;
                  color: #c0c0c0;
                  font-size: 10px;
                  line-height: 1.68;
                  letter-spacing: -0.2px;
                }
              }
            }
            & > img {
              width: 100%;
            }
          }
        }
      }
    }
  }

  footer {
    position: relative;
    background-color: #f2f2f2;
    text-align: center;
    padding: 50px 0 65px;
    z-index: 1;
    .icon {
      & > img {
        width: 46px;
        height: 46px;
      }
      & > p {
        font-size: 23px;
        font-weight: 700;
        font-family: "Roboto";
        color: #000;
        letter-spacing: 0.69px;
        margin-top: 10px;
      }
    }
    & > ul {
      margin-top: 45px;
      padding: 0 30px;
      text-align: left;
      & > li {
        border-top: 1px dashed #c2c2c2;
        &:last-of-type {
          border-bottom: 1px dashed #c2c2c2;
        }
        & > a {
          display: flex;
          align-items: center;
          height: 58px;
          font-size: 15px;
          color: #000;
          letter-spacing: -0.3px;
        }
      }
    }
  }

  .bg_image {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 0;
    .cover {
      position: absolute;
      width: 100%;
      height: 518px;
      bottom: -1px;
      left: 0px;
      z-index: 2;
      background: linear-gradient(
        180deg,
        rgba(34, 34, 34, 0) 30%,
        rgba(34, 34, 34, 100) 100%
      );
    }
    & > img {
      width: 100%;
      height: 518px;
    }
  }
`;
