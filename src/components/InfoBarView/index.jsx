import React from "react";
import { InfoBarViewStyle } from "./style";

const InforBarView = ({ icon, text, smallText }) => {
  return (
    <InfoBarViewStyle>
      <button>
        {/* <div className="icon">
          <img src={icon} alt="info bar icon" />
        </div>
         */}
        <img src={icon} alt="info bar icon" />
        {text}
        <span>{smallText}</span>
      </button>
    </InfoBarViewStyle>
  );
};

export default InforBarView;
