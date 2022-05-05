import styled from "@emotion/styled";

export const MainStyle = styled.div`
  main {
    background-color: #222;
    padding: 0 0 130px 0;
    header {
      position: relative;
      .text {
        position: absolute;
        padding: 0 40px;
        bottom: 38px;
        width: 100%;
        z-index: 2;
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
        bottom: -1px;
        left: 0px;
        z-index: 1;
        img {
          width: 100%;
        }
      }
      .bg {
        z-index: 0;
        img {
          width: 100%;
        }
      }
    }

    & > ul {
      padding: 0 30px;
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
      }
    }
  }
  footer {
    background-color: #f2f2f2;
    text-align: center;
    padding: 50px 0 65px;
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
`;
