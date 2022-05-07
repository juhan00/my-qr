import styled from "@emotion/styled";
import btnBack from "@images/ic_back.png";

export const SubHeaderStyle = styled.div`
  padding: 20px 14px 0;
  .btn_back {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url(${btnBack}) 50% 50% no-repeat;
    background-size: 26.5px 23.5px;
    font-size: 0px;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    width: 100%;
    height: 40px;
    font-size: 20px;
    color: #000;
  }
`;
