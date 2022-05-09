import React, { useState } from "react";
import { MainStyle } from "./style";
import main_img from "@images/main_img.png";
import MainList from "@components/MainList";
import Thumbnail from "@components/Thumbnail";
import myqr from "@images/ic_myqr.png";
import main_map from "@images/main_map.png";

const initialInfoText = {
  title: "여유와 휴식이 있는 커피프린스",
  descript:
    "고급 원두와 특화된 내림으로 향기와 맛, 여운 가득한 커피를 즐길 수 있습니다 (커피 배달도 가능합니다)",
};

const initialQrData = [
  {
    index: 0,
    category: "call",
    list: [
      {
        icon: "ic_call",
        text: "070-2568-2586",
        safety: "on",
      },
    ],
  },
  {
    index: 1,
    category: "email",
    list: [
      {
        icon: "ic_email",
        text: "sonjoon82@gmail.ocm",
      },
      {
        icon: "ic_email",
        text: "mnd5882@naver.com",
      },
    ],
  },
  {
    index: 2,
    category: "homepage",
    list: [
      {
        icon: "ic_homepage",
        text: "www.good-lock.net",
      },
    ],
  },
  {
    index: 3,
    category: "app",
    list: [
      {
        icon: "ic_appleStore",
        text: "App Store",
        link: "www.good-lock.net",
      },
      {
        icon: "ic_googlePlay",
        text: "Google Play",
        link: "www.good-lock.net",
      },
      {
        icon: "ic_oneStore",
        text: "One Store",
        link: "www.good-lock.net",
      },
    ],
  },
  {
    index: 4,
    category: "sns",
    list: [
      {
        icon: "ic_instagram",
        text: "Instagram",
        link: "www.good-lock.net",
      },
      {
        icon: "ic_facebook",
        text: "Facebook",
        link: "www.good-lock.net",
      },
      {
        icon: "ic_twitter",
        text: "Twitter",
        link: "www.good-lock.net",
      },
      {
        icon: "ic_youtube",
        text: "Youtube",
        link: "www.good-lock.net",
      },
    ],
  },
];

const initialMapData = {
  data: false,
  location: "서울특별시 양천구 목동서로130 목동아파트",
};

const Main = () => {
  const [infoText, setInfoText] = useState(initialInfoText);
  const [qrData, setQrData] = useState(initialQrData);
  const [mapData, setMapData] = useState(initialMapData);

  const handleCopyLocation = async () => {
    await navigator.clipboard.writeText(mapData.location);
    alert("Copied To clipboard");
  };

  return (
    <MainStyle>
      <main>
        <header>
          <div className="text">
            <h1 dangerouslySetInnerHTML={{ __html: infoText.title }}></h1>
            <p dangerouslySetInnerHTML={{ __html: infoText.descript }}></p>
          </div>
          <div className="cover"></div>
        </header>
        <ul>
          {qrData.map((item) => (
            <li key={item.index}>
              {item.category === "call" ? (
                <MainList title="전화걸기" list={item.list} />
              ) : item.category === "email" ? (
                <MainList title="이메일 보내기" list={item.list} />
              ) : item.category === "homepage" ? (
                <MainList title="홈페이지" list={item.list} />
              ) : item.category === "app" ? (
                <MainList title="앱 다운로드" list={item.list} />
              ) : (
                item.category === "sns" && (
                  <MainList title="SNS" list={item.list} />
                )
              )}
            </li>
          ))}
          <li>
            <h2>사진보기</h2>
            <Thumbnail />
          </li>
          <li>
            <h2>위치보기</h2>
            <div className="location">
              <div className="text">{mapData.location}</div>
              <button onClick={() => handleCopyLocation()}>복사</button>
              <div className="map_wrap">
                {mapData.data ? (
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
        <div className="footer_icon">
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
