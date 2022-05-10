import React from "react";
import { JoinStyle } from "./style";
import SubHeader from "@components/SubHeader";

const Join = () => {
  return (
    <JoinStyle>
      <SubHeader title="회원가입" />
      <main>
        <ul>
          <li>
            <input type="text" placeholder="이메일 주소를 입력해주세요" />
            <input type="text" placeholder="비밀번호를 입력해주세요" />
            <input type="text" placeholder="비밀번호를 재입력해주세요" />
            <p>6자 이상으로 입력해주세요</p>
          </li>
          <li>
            <input type="text" placeholder="닉네임을 입력해주세요" />
            <p>ID/PW 잊어버렸을 때 필요합니다. 꼭 기억하세요</p>
          </li>
        </ul>

        <div className="agreement">
          <label>
            <button className="checkbox active">체크박스</button>
            약관/개인 정보 취급 방식 동의
          </label>
          <a href="#none">_내용보기</a>
        </div>

        <div className="btn_wrap">
          <button className="btn round green">인증메일 발송</button>
        </div>
      </main>
    </JoinStyle>
  );
};

export default Join;
