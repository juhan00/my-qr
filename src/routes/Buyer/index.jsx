import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BuyerStyle } from "./style";
import myqr from "@images/ic_myqr.png";
import imgQr from "@images/img_qr.png";

const initialMyqrData = {
  location: "my-qr.kr/sonjoon82",
  qrHome: {
    title: "안녕하세요 전화주시면 바로 연락 드리겠...",
    descript:
      "전화번호:010-1234-5678<br />위치(지도):서울시 양천구 목동서로 130 목동...",
  },
  qrSticker: [
    {
      index: "#000523",
      date: "2021.06.36 오후06:53",
    },
    {
      index: "#000418",
      date: "2021.06.36 오후06:53",
    },
  ],
};

const Buyer = () => {
  const [myqrData, setMyqrData] = useState(initialMyqrData);

  return (
    <BuyerStyle>
      <nav>
        <button className="btn_nav">메뉴</button>
      </nav>
      <main>
        <div className="qr_icon">
          <img src={myqr} alt="MyQR icon" />
          <p>Welcome MyQR</p>
        </div>

        <section className="qr_location">
          <button>버튼</button>
          <div className="content_wrap">
            <h2>QR-home 주소</h2>
            <p>{myqrData.location}</p>
            <button>주소복사</button>
          </div>
        </section>

        <section className="qr_setting">
          <h2>QR-home 관리</h2>
          <p>{myqrData.qrHome.title}</p>
          <p>{myqrData.qrHome.descript}</p>
          <button>내용수정</button>
        </section>

        <section className="my_qr">
          <h2>
            내가 보유한 QR스티커 <button>추가</button>
          </h2>
          <ul>
            {myqrData.qrSticker.length === 0 ? (
              <li>
                <div className="text_wrap no_data">
                  <h3>등록된 QR-code가 없습니다.</h3>
                  <p>구매하신 스티커의 QR-code를 등록하세요</p>
                </div>
              </li>
            ) : (
              myqrData.qrSticker.map((item) => (
                <li key={item.index}>
                  <img src={imgQr} alt="qr img" />
                  <div className="text_wrap">
                    <h3>#000523</h3>
                    <p>2021.06.36 오후06:53</p>
                  </div>
                  <button>버튼</button>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
      <footer>
        <ul>
          <li>
            <NavLink to="/buyer">서비스소개</NavLink>
          </li>
          <li>
            <NavLink to="/buyer">개인정보정책</NavLink>
          </li>
          <li>
            <NavLink to="/buyer">공지사항</NavLink>
          </li>
        </ul>
        <div className="copyright">Copyright myQR. all right reserved</div>
        <div className="descript">
          현재 서비스는 와디즈 펀딩기간 한정 판매 버전이기에,
          <br />
          구매하신 스티커의 QR-code와 QR-home은
          <br />
          서비스운영 상, 1년간(2023년 8월 31일)만 사용할 수 있습니다
          <br />
          <br />
          와디즈 펀딩 후, 서비스 전면개편을 통해,
          <br />더 나은 서비스로 다시 찾아뵙겠습니다
        </div>
      </footer>
    </BuyerStyle>
  );
};

export default Buyer;
