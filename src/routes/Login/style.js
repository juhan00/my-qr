import styled from "@emotion/styled";

export const LoginStyle = styled.div`
  main {
    padding: 75px 52px 65px;
    .character {
      text-align: center;
      & > img {
        width: 102px;
        height: 102px;
      }
      & > p {
        margin-top: 15px;
        font-size: 12px;
        color: #999;
        letter-spacing: -0.36px;
      }
    }

    & > input:first-of-type {
      margin-top: 45px;
    }
    & > input + input {
      margin-top: 15px;
    }

    & > .btn_wrap {
      margin-top: 15px;
    }

    & > .sub_btn_wrap {
      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > a {
        position: relative;
        font-size: 11px;
        color: #999;
        padding: 0 14px;
      }
      & > a + a {
        &::before {
          position: absolute;
          top: 0px;
          left: 0px;
          content: "";
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
    }
  }
  footer {
    & > ul {
      padding: 0 30px;
      text-align: left;
      & > li {
        border-top: 1px dashed #ddd;
        &:last-of-type {
          border-bottom: 1px dashed #ddd;
        }
        & > a {
          display: flex;
          align-items: center;
          height: 52px;
          font-size: 15px;
          color: #666;
          letter-spacing: -0.3px;
        }
      }
    }
  }
`;
