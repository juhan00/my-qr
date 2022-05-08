import React from "react";
import { EditListStyle } from "./style";

const EditList = ({ title, category, list }) => {
  return (
    <EditListStyle>
      <div className="title">
        <h3>{title}</h3>
        <button className="checkbox active">체크박스</button>
      </div>
      <input type="text" defaultValue="전화걸기" />
      {category === "call" ? (
        <>
          <div className="list_wrap">
            <div className="icon_wrap">
              <button className="btn_edit">수정</button>
              <div className="icon ic_call"></div>
            </div>
            <input type="text" placeholder="전화번호를 입력하세요" />
            <button className="btn_safety acitve">안심번호</button>
          </div>
          <div className="btn_wrap">
            <button>추가</button>
          </div>
        </>
      ) : category === "email" ? (
        <>
          <div className="list_wrap">
            <div className="icon_wrap">
              <button className="btn_edit">수정</button>
              <div className="icon ic_email"></div>
            </div>
            <input type="text" placeholder="메일주소를 입력하세요" />
          </div>
          <div className="btn_wrap">
            <button>추가</button>
          </div>
        </>
      ) : category === "homepage" ? (
        <>
          <div className="list_wrap">
            <div className="icon_wrap">
              <button className="btn_edit">수정</button>
              <div className="icon ic_homepage"></div>
            </div>
            <input type="text" placeholder="링크주소를 입력하세요" />
          </div>
          <div className="list_wrap">
            <div className="icon_wrap">
              <button className="btn_edit">수정</button>
              <div className="icon ic_homepage"></div>
            </div>
            <input type="text" placeholder="링크주소를 입력하세요" />
          </div>
          <div className="btn_wrap">
            <button>삭제</button>
            <button>추가</button>
          </div>
        </>
      ) : category === "app" ? (
        <>
          <div className="list_wrap">
            <div className="icon_wrap">
              <button className="btn_edit">수정</button>
              <div className="icon ic_app"></div>
            </div>
            <input type="text" defaultValue="Google Play" />
            <input type="text" placeholder="링크주소를 입력하세요" />
          </div>
          <div className="btn_wrap">
            <button>추가</button>
          </div>
        </>
      ) : (
        category === "sns" && (
          <>
            <div className="list_wrap">
              <div className="icon_wrap">
                <button className="btn_edit">수정</button>
                <div className="icon ic_instagram"></div>
              </div>
              <input type="text" defaultValue="Instagram" />
              <input type="text" placeholder="링크주소를 입력하세요" />
            </div>
            <div className="btn_wrap">
              <button>추가</button>
            </div>
          </>
        )
      )}
    </EditListStyle>
  );
};

export default EditList;
