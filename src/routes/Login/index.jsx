import React from "react";
import { LoginStyle } from "./style";
import character from "@images/login_character.png";

const Login = () => {
  return (
    <LoginStyle>
      <main>
        <div className="character">
          <img src={character} alt="character" />
          <p>MyQR에 오신 것을 환영합니다</p>
        </div>

        <input type="text" placeholder="이메일주소를 입력하세요" />
        <input type="text" placeholder="비밀번호를 입력하세요" />

        <div className="btn_wrap">
          <button className="btn round blue">로그인</button>
        </div>

        <div className="sub_btn_wrap">
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
        </div>
      </main>
      <footer>
        <ul>
          <li>
            <a href="#none">회원가입</a>
          </li>
          <li>
            <a href="#none">서비스 소개</a>
          </li>
          <li>
            <a href="#none">건의/문의/신고</a>
          </li>
        </ul>
      </footer>
    </LoginStyle>
  );
};

export default Login;
