import styled from "@emotion/styled";

export const JoinStyle = styled.div`
  main {
    padding: 37px 30px 50px;
    & > ul {
      & > li {
        & > input + input {
          margin-top: 15px;
        }
        & > p {
          padding: 12px 15px 0;
          font-size: 11px;
          color: #999;
        }
      }
      & > li + li {
        margin-top: 35px;
      }
    }

    .agreement {
      margin-top: 50px;
      display: flex;
      align-items: center;
      & > label {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #999;
        & > button {
          margin-right: 10px;
        }
      }
      & > a {
        font-size: 12px;
        color: #009ff2;
        letter-spacing: -0.6px;
        margin-left: 10px;
      }
    }

    .btn_wrap {
      margin-top: 63px;
      justify-content: center;
      & > button {
        width: 255px;
      }
    }
  }
`;
