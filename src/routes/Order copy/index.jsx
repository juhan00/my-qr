import React from "react";
import { OrderStyle } from "./style";
import SubHeader from "@components/SubHeader";

const Order = () => {
  return (
    <OrderStyle>
      <SubHeader title="순서변경" />
      <ul>
        <li>
          <div className="icon ic_call"></div>
          <h2>전화번호</h2>
          <button>이동버튼</button>
        </li>
        <li>
          <div className="icon ic_email"></div>
          <h2>이메일</h2>
          <button>이동버튼</button>
        </li>
        <li>
          <div className="icon ic_homepage"></div>
          <h2>링크주소</h2>
          <button>이동버튼</button>
        </li>
        <li>
          <div className="icon ic_app"></div>
          <h2>앱 다운로드</h2>
          <button>이동버튼</button>
        </li>
        <li>
          <div className="icon ic_sns"></div>
          <h2>SNS</h2>
          <button>이동버튼</button>
        </li>
        <li>
          <div className="icon ic_picture"></div>
          <h2>사진</h2>
          <button>이동버튼</button>
        </li>
        <li>
          <div className="icon ic_location"></div>
          <h2>위치(지도)</h2>
          <button>이동버튼</button>
        </li>
      </ul>
    </OrderStyle>
  );
};

export default Order;
