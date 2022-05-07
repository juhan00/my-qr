import styled from "@emotion/styled";
import btnSafetyOn from "@images/btn_safety_on.png";
import btnSafetyOff from "@images/btn_safety_off.png";

export const InfoBarEditStyle = styled.div`
  display: flex;
  margin-top: 10px;

  .icon_wrap {
    position: relative;
    .icon {
    }
    .btn_edit {
      position: absolute;
      right: -5px;
      bottom: -5px;
    }
  }

  & > input {
    flex: 1 1 auto;
    margin-left: 10px;
    height: 50px;
    border: 0px;
    border-radius: 10px;
    padding: 0 15px;
    font-size: 15px;
    color: #000;
  }

  .btn_safety {
    margin-left: auto;
    margin-left: 10px;
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
`;
