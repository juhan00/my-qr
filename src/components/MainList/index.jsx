import React from "react";
import { MainListStyle } from "./style";

const MainList = ({ title, list }) => {
  return (
    <MainListStyle>
      <h2>{title}</h2>
      {list.map((item, index) => (
        <button key={index}>
          <div className={`icon ${item.icon}`}></div>
          {item.text}
          {item.safety && <span>(안심번호)</span>}
        </button>
      ))}
    </MainListStyle>
  );
};

export default MainList;
