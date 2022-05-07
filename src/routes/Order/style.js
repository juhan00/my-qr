import styled from "@emotion/styled";
import btnOrder from "@images/btn_order.png";

export const OrderStyle = styled.div`
  padding: 0 30px 0 27px;
  & > ul {
    margin-top: 37px;
    & > li {
      display: flex;
      align-items: center;
      & > h2 {
        margin-left: 16px;
        font-size: 18px;
        color: #212406;
      }

      & > button {
        margin-left: auto;
        width: 30px;
        height: 17px;
        background: url(${btnOrder}) 50% 50% no-repeat;
        background-size: 30px 17px;
        font-size: 0px;
        border: 0px;
      }
    }
    & > li + li {
      margin-top: 20px;
    }
  }
`;
