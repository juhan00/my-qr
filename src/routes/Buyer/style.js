import styled from "@emotion/styled";
import icMoreWhite from "@images/ic_more_white.png";
import icMoreBlack from "@images/ic_more_black.png";

export const BuyerStyle = styled.div`
  position: relative;
  nav {
    position: absolute;
    top: 21px;
    right: 16px;
  }

  main {
    padding: 54px 30px 0;

    .qr_icon {
      text-align: center;
      & > img {
        width: 46px;
        height: 46px;
      }
      & > p {
        font-size: 15px;
        font-family: "Roboto", sans-serif;
        color: #000;
        letter-spacing: 0.69px;
        margin-top: 10px;
      }
    }

    .qr_location {
      display: flex;
      justify-content: center;
      text-align: center;
      position: relative;
      margin-top: 50px;
      padding: 25px 28px;
      width: 100%;
      background-color: #25bcb3;
      box-shadow: 0px 3.5px 10px 0 rgba(0, 0, 0, 0.03);
      border-radius: 20px;
      & > button {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 35px;
        height: 35px;
        background: url(${icMoreWhite}) 50% 50% no-repeat;
        background-size: 5px 21.5px;
        border: 0px;
        font-size: 0px;
      }
      .content_wrap {
        & > h2 {
          font-weight: 700;
          font-size: 12px;
          color: #fff;
        }
        & > p {
          margin-top: 19px;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
        & > button {
          margin-top: 20px;
          padding: 5px 15px;
          height: 20px;
          border-radius: 10px;
          background-color: #fff;
          border: 0px;
          color: #00ada3;
          font-size: 10px;
          font-weight: 700;
        }
      }
    }

    .qr_setting {
      position: relative;
      margin-top: 25px;
      padding: 25px 28px;
      width: 100%;
      background-color: #fff;
      box-shadow: 0px 3.5px 10px 0 rgba(0, 0, 0, 0.03);
      border-radius: 20px;
      text-align: center;
      & > h2 {
        font-size: 15px;
        font-weight: 700;
        color: #000;
        text-align: left;
      }
      & > p {
        margin-top: 23px;
        font-size: 13px;
        color: #000;
        text-align: left;
      }
      & > p:nth-of-type(2) {
        margin-top: 14px;
        font-size: 12px;
        color: #999;
        line-height: 1.42;
        text-align: left;
      }
      & > button {
        margin-top: 25px;
        display: inline-block;
        height: 20px;
        padding: 5px 15px;
        border-radius: 10px;
        background-color: #666;
        border: 0px;
        color: #fff;
        font-size: 10px;
        font-weight: 700;
      }
    }

    .my_qr {
      position: relative;
      margin-top: 25px;
      padding: 25px 28px 4px;
      width: 100%;
      background-color: #fff;
      box-shadow: 0px 3.5px 10px 0 rgba(0, 0, 0, 0.03);
      border-radius: 20px;
      text-align: center;
      & > h2 {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 700;
        color: #000;
        & > button {
          margin-left: auto;
          font-size: 13px;
          color: #000;
          border: 0px;
          background-color: #fff;
        }
      }
      & > ul {
        margin-top: 25px;
        & > li {
          position: relative;
          border-top: 1px dashed #eee;
          padding: 24px 0;
          display: flex;
          align-items: center;
          & > img {
            width: 60px;
            height: 60px;
          }
          .text_wrap {
            text-align: left;
            margin-left: 15px;
            & > h3 {
              font-size: 18px;
              font-weight: 700;
              color: #000;
            }
            & > p {
              margin-top: 12px;
              font-size: 11px;
              color: #666;
            }
            &.no_data {
              & > h3 {
                font-size: 13px;
                color: #ff3300;
              }
              & > p {
                margin-top: 12px;
                font-size: 12px;
                color: #999;
              }
            }
          }
          & > button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -17px;
            width: 35px;
            height: 35px;
            background: url(${icMoreBlack}) 50% 50% no-repeat;
            background-size: 5px 21.5px;
            border: 0px;
            font-size: 0px;
          }
        }
      }
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 100px 53px;
    & > ul {
      display: flex;
      align-items: center;
      & > li {
        & > a {
          padding: 0 15px;
          font-size: 12px;
          color: #666;
        }
      }
    }
    .copyright {
      margin-top: 20px;
      font-size: 8px;
      color: #bbb;
      text-align: center;
    }

    .descript {
      margin-top: 25px;
      font-size: 10px;
      color: #999;
      line-height: 1.5;
      text-align: center;
    }
  }
`;
