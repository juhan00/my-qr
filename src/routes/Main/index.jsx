import React, { useState } from "react";
import { MainStyle } from "./style";
import main_img from "@images/main_img.png";
import InfoBarView from "@components/InfoBarView";
import Thumbnail from "@components/Thumbnail";
import myqr from "@images/ic_myqr.png";
import main_map from "@images/main_map.png";

const initialState = {
  top: {
    title: "여유와 휴식이<br />있는 커피프린스",
    descript:
      "고급 원두와 특화된 내림으로<br />향기와 맛, 여운 가득한 커피를 즐길 수 있습니다<br />(커피 배달도 가능합니다)",
  },
  call: {
    icon: "ic_call",
    text: "070-2568-2586",
    smallText: "(안심번호)",
  },
  email: [
    {
      icon: "ic_email",
      text: "sonjoon82@gmail.ocm",
    },
    {
      icon: "ic_email",
      text: "mnd5882@naver.com",
    },
  ],
  homepage: {
    icon: "ic_homepage",
    text: "www.good-lock.net",
  },
  app: [
    {
      icon: "ic_appleStore",
      text: "App Store",
    },
    {
      icon: "ic_googlePlay",
      text: "Google Play",
    },
    {
      icon: "ic_oneStore",
      text: "One Store",
    },
  ],
  sns: [
    {
      icon: "ic_instagram",
      text: "Instagram",
    },
    {
      icon: "ic_facebook",
      text: "Facebook",
    },
    {
      icon: "ic_twitter",
      text: "Twitter",
    },
    {
      icon: "ic_youtube",
      text: "Youtube",
    },
  ],
  map: {
    data: false,
    location: "서울특별시 양천구 목동서로130 목동아파트",
  },
};

const Main = () => {
  const [state, setState] = useState(initialState);

  const handleCopyLocation = async () => {
    await navigator.clipboard.writeText(state.map.location);
    alert("Copied To clipboard");
  };

  return (
    <MainStyle>
      <main>
        <header>
          <div className="text">
            <h1 dangerouslySetInnerHTML={{ __html: state.top.title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: state.top.descript }}></p>
          </div>
          <div className="cover"></div>
        </header>
        <ul>
          <li>
            <h2>전화걸기</h2>
            <InfoBarView
              icon={state.call.icon}
              text={state.call.text}
              smallText={state.call.smallText}
            />
          </li>
          <li>
            <h2>이메일 보내기</h2>
            {state.email.map((item, index) => (
              <InfoBarView icon={item.icon} text={item.text} key={index} />
            ))}
          </li>
          <li>
            <h2>홈페이지</h2>
            <InfoBarView
              icon={state.homepage.icon}
              text={state.homepage.text}
            />
          </li>
          <li>
            <h2>앱 다운로드</h2>
            {state.app.map((item, index) => (
              <InfoBarView icon={item.icon} text={item.text} key={index} />
            ))}
          </li>
          <li>
            <h2>SNS</h2>
            {state.sns.map((item, index) => (
              <InfoBarView icon={item.icon} text={item.text} key={index} />
            ))}
          </li>
          <li>
            <h2>사진보기</h2>
            <Thumbnail />
          </li>
          <li>
            <h2>위치보기</h2>
            <div className="location">
              <div className="text">{state.map.location}</div>
              <button onClick={() => handleCopyLocation()}>복사</button>
              <div className="map_wrap">
                {state.map.data ? (
                  <img src={main_map} alt="map" />
                ) : (
                  <div className="default">
                    <div className="text">
                      <h2>지도를　표시할 수 없습니다</h2>
                      <p>
                        네트워크가 불안정하거나 <br />
                        링크가 잘못되었을 수 있습니다
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
      <div className="bg_image">
        <div className="cover"></div>
        <img src={main_img} alt="main img" />
      </div>
    </MainStyle>
  );
};

export default Main;
