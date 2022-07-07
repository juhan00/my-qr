import React from "react";
import { IntroStyle } from "./style";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <IntroStyle>
      <ul>
        <li>
          <NavLink to="/main">메인화면테스트</NavLink>
        </li>
        <li>
          <NavLink to="/edit">QR정보 등록</NavLink>
        </li>
        <li>
          <NavLink to="/order">순서변경</NavLink>
        </li>
        <li>
          <NavLink to="/login">로그인</NavLink>
        </li>
        <li>
          <NavLink to="/join">회원가입</NavLink>
        </li>
        <li>
          <NavLink to="/buyer">구매자 홈</NavLink>
        </li>
      </ul>
    </IntroStyle>
  );
};

export default Intro;
