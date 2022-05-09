import React from "react";
import { EditListStyle } from "./style";

const EditList = ({ category }) => {
  return (
    <EditListStyle>
      {category === "call" ? (
        <>
          <div className="title">
            <h3>전화번호</h3>
            <button className="checkbox active">체크박스</button>
            {/* 활성화:active, 비활성화:active 제거 */}
          </div>
          <input type="text" defaultValue="전화걸기" />
          <div className="list_wrap">
            <div className="icon_wrap">
              <button className="btn_edit">수정</button>
              <div className="icon ic_call"></div>
            </div>
            <input type="text" placeholder="전화번호를 입력하세요" />
            <button className="btn_safety acitve">안심번호</button>
            {/* 활성화:active, 비활성화:active 제거 */}
          </div>
          <div className="btn_wrap">
            <button>추가</button>
          </div>
        </>
      ) : category === "email" ? (
        <>
          <div className="title">
            <h3>이메일</h3>
            <button className="checkbox active">체크박스</button>
            {/* 활성화:active, 비활성화:active 제거 */}
          </div>
          <input type="text" defaultValue="이메일 보내기" />
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
          <div className="title">
            <h3>링크주소</h3>
            <button className="checkbox active">체크박스</button>
            {/* 활성화:active, 비활성화:active 제거 */}
          </div>
          <input type="text" defaultValue="홈페이지" />
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
          <div className="title">
            <h3>앱 다운로드</h3>
            <button className="checkbox active">체크박스</button>
            {/* 활성화:active, 비활성화:active 제거 */}
          </div>
          <input type="text" defaultValue="앱 다운로드" />
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
            <div className="title">
              <h3>SNS</h3>
              <button className="checkbox active">체크박스</button>
              {/* 활성화:active, 비활성화:active 제거 */}
            </div>
            <input type="text" defaultValue="SNS 구경하기" />
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
