import React from "react";
import { InfoBarViewStyle } from "./style";

const InforBarView = ({ icon, text, smallText }) => {
  return (
    <InfoBarViewStyle>
      <img src={icon} alt="info bar icon" />
      {text}
      <span>{smallText}</span>
    </InfoBarViewStyle>
  );
};

export default InforBarView;
