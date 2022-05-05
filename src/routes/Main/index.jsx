import React from "react";
import { MainStyle } from "./style";
import main_img from "@images/main_img.png";
import main_cover from "@images/main_cover.png";
import InfoBarView from "@components/InfoBarView";
import call from "@images/ic_info_bar_call.png";
import email from "@images/ic_info_bar_email.png";
import homepage from "@images/ic_info_bar_homepage.png";
import appleStore from "@images/ic_info_bar_apple_store.png";
import googlePlay from "@images/ic_info_bar_google_play.png";
import oneStore from "@images/ic_info_bar_one_store.png";
import instagram from "@images/ic_info_bar_instagram.png";
import facebook from "@images/ic_info_bar_facebook.png";
import twitter from "@images/ic_info_bar_twitter.png";
import youtube from "@images/ic_info_bar_youtube.png";
import myqr from "@images/ic_myqr.png";

const Main = () => {
  return (
    <MainStyle>
      <main>
        <header>
          <div className="text">
            <h1>
              여유와 휴식이
              <br />
              있는 커피프린스
            </h1>
            <p>
              고급 원두와 특화된 내림으로
              <br />
              향기와 맛, 여운 가득한 커피를 즐길 수 있습니다
              <br />
              (커피 배달도 가능합니다)
            </p>
          </div>
          <div className="cover">
            <img src={main_cover} alt="main cover" />
          </div>
          <div className="bg">
            <img src={main_img} alt="main img" />
          </div>
        </header>
        <ul>
          <li>
            <h2>전화걸기</h2>
            <InfoBarView
              icon={call}
              text="070-2568-2586"
              smallText="(안심번호)"
            />
          </li>
          <li>
            <h2>이메일 보내기</h2>
            <InfoBarView icon={email} text="sonjoon82@gmail.ocm" />
            <InfoBarView icon={email} text="mnd5882@naver.com" />
          </li>
          <li>
            <h2>홈페이지</h2>
            <InfoBarView icon={homepage} text="www.good-lock.net" />
          </li>
          <li>
            <h2>앱 다운로드</h2>
            <InfoBarView icon={appleStore} text="App Store" />
            <InfoBarView icon={googlePlay} text="Google Play" />
            <InfoBarView icon={oneStore} text="One Store" />
          </li>
          <li>
            <h2>SNS</h2>
            <InfoBarView icon={instagram} text="Instagram" />
            <InfoBarView icon={facebook} text="Facebook" />
            <InfoBarView icon={twitter} text="Twitter" />
            <InfoBarView icon={youtube} text="Youtube" />
          </li>
        </ul>
      </main>
      <footer>
        <div className="icon">
          <img src={myqr} alt="MyQR icon" />
          <p>MyQR</p>
        </div>
        <ul>
          <li>
            <a href="#none">서비스 소개</a>
          </li>
          <li>
            <a href="#none">공유하기</a>
          </li>
          <li>
            <a href="#none">건의/문의/신고</a>
          </li>
          <li>
            <a href="#none">마이페이지</a>
          </li>
        </ul>
      </footer>
    </MainStyle>
  );
};

export default Main;
