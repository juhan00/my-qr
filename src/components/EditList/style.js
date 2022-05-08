import styled from "@emotion/styled";
import btnSafetyOn from "@images/btn_safety_on.png";
import btnSafetyOff from "@images/btn_safety_off.png";

export const EditListStyle = styled.div`
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    & > h3 {
      font-size: 20px;
      font-weight: 700;
    }
    & > button {
      margin-left: auto;
    }
  }
  & > input {
    &:first-of-type {
      margin-top: 0px;
    }
    margin-top: 10px;
  }

  .btn_wrap {
    display: flex;
    margin-top: 10px;
    & > button {
      width: 100%;
      height: 50px;
      background-color: #eee;
      border-radius: 10px;
      border: 0px;
      font-size: 16px;
      color: #000;
    }
    & > button + button {
      margin-left: 10px;
    }
  }

  .list_wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    .icon_wrap {
      flex: 0;
      position: relative;
      .btn_edit {
        position: absolute;
        right: -5px;
        bottom: -5px;
      }
    }

    & > input {
      flex: 1 0 auto;
      margin-left: 10px;
      width: calc(100% - 120px);
      height: 50px;
      border: 0px;
      border-radius: 10px;
      padding: 0 15px;
      font-size: 15px;
      color: #000;
    }
    & > input + input {
      margin-top: 10px;
      margin-left: 0px;
      min-width: 100%;
    }

    .btn_safety {
      flex: 0;
      margin-left: 10px;
      min-width: 50px;
      width: 50px;
      height: 50px;
      background: url(${btnSafetyOff}) 50% 50% no-repeat;
      background-size: 50px 50px;
      font-size: 0px;
      border: 0px;
      &.acitve {
        background: url(${btnSafetyOn}) 50% 50% no-repeat;
        background-size: 50px 50px;
      }
    }
  }
`;
