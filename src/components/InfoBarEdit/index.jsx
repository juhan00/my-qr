import React from "react";
import { InfoBarEditStyle } from "./style";

const InfoBarEdit = ({ icon, text, defaultText, safety }) => {
  return (
    <InfoBarEditStyle>
      <div className="icon_wrap">
        <button className="btn_edit">수정</button>
        <div className={`icon ${icon}`}></div>
      </div>
      <input type="text" defaultValue={text} placeholder={defaultText} />
      {safety &&
        (safety === "on" ? (
          <button className="btn_safety acitve">안심번호</button>
        ) : (
          <button className="btn_safety">안심번호</button>
        ))}
    </InfoBarEditStyle>
  );
};

export default InfoBarEdit;
