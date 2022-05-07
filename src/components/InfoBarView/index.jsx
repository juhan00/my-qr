import React from "react";
import { InfoBarViewStyle } from "./style";

const InforBarView = ({ icon, text, smallText }) => {
  return (
    <InfoBarViewStyle>
      <div className={`icon ${icon}`}></div>
      {/* <img src={icon} alt="info bar icon" /> */}
      {text}
      <span>{smallText}</span>
    </InfoBarViewStyle>
  );
};

export default InforBarView;
