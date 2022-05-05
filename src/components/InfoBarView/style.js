import styled from "@emotion/styled";

export const InfoBarViewStyle = styled.button`
  & + & {
    margin-top: 14px;
  }
  position: relative;
  text-align: left;
  width: 100%;
  height: 54px;
  font-size: 15px;
  color: #fff;
  padding: 0 10px 0 69px;
  background-color: #393939;
  border: 0px;
  border-radius: 10px;
  & > img {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 50px;
    height: 50px;
  }
  & > span {
    font-size: 10px;
    margin-left: 5px;
  }
`;
