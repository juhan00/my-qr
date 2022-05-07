import React from "react";
import { SubHeaderStyle } from "./style";

const SubHeader = ({ title }) => {
  return (
    <SubHeaderStyle>
      <a href="#none" className="btn_back">
        뒤로
      </a>
      <h1>{title}</h1>
    </SubHeaderStyle>
  );
};

export default SubHeader;
