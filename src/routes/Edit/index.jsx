import React, { useState } from "react";
import { EditStyle } from "./style";
import InfoBarEdit from "@components/InfoBarEdit";
import main_img from "@images/main_img.png";

const initialState = {
  top: {
    title: "여유와 휴식이 있는 커피프린스",
    descript:
      "고급 원두와 특화된 내림으로 향기와 맛, 여운 가득한 커피를 즐길 수 있습니다 (커피 배달도 가능합니다)",
  },
  call: {
    icon: "ic_call",
    text: "070-2568-2586",
    safety: "on",
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

const Edit = () => {
  const [state, setState] = useState(initialState);
  const [imgFiles, setImgFiles] = useState([]);

  const onChange = (e) => {
    const files = e.target.files;
    const filesArr = Array.prototype.slice.call(files);
    setImgFiles([...imgFiles, ...filesArr]);
  };

  const removeFile = (file) => {
    setImgFiles(imgFiles.filter((item) => item !== file));
  };

  return (
    <EditStyle>
      <header>
        <a href="#none" className="btn_back">
          뒤로
        </a>
        <h1>QR정보 등록</h1>
      </header>
      <main>
        <div className="btn_wrap">
          <button className="active">정보등록</button>
          <button>다이렉트 링크</button>
        </div>

        <div className="bg_wrap">
          <div className="img_wrap">
            <img src={main_img} alt="" />
            <button className="btn_edit">수정</button>
          </div>
          <p>기본 배경 이미지</p>
        </div>

        <ul>
          <li>
            <h2>제목</h2>
            <textarea
              className="title"
              defaultValue={state.top.title}></textarea>
          </li>
          <li>
            <h2>
              설명문구 <span>(선택)</span>
            </h2>
            <textarea
              className="descript"
              defaultValue={state.top.descript}></textarea>
          </li>
          <li>
            <h2>
              QR 정보 <span>(최소 1개이상 선택)</span>
            </h2>
            <section className="qr_edit">
              <ul>
                <li>
                  <div className="title">
                    <h3>전화번호</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input type="text" defaultValue="전화걸기" />
                  <InfoBarEdit
                    icon={state.call.icon}
                    text={state.call.text}
                    defaultText="전화번호를 입력하세요"
                    safety={state.call.safety}
                  />
                  <div className="btn_wrap">
                    <button>추가</button>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h3>이메일</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input type="text" defaultValue="이메일 보내기" />
                  {state.email.map((item, index) => (
                    <InfoBarEdit
                      icon={item.icon}
                      text={item.text}
                      defaultText="메일주소를 입력하세요"
                      key={index}
                    />
                  ))}

                  <div className="btn_wrap">
                    <button>추가</button>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h3>링크주소</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input type="text" defaultValue="홈페이지" />
                  <InfoBarEdit
                    icon={state.homepage.icon}
                    text={state.homepage.text}
                    defaultText="링크주소를 입력하세요"
                  />
                  <div className="btn_wrap">
                    <button>삭제</button>
                    <button>추가</button>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h3>앱 다운로드</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input type="text" defaultValue="앱 다운로드" />
                  {state.app.map((item, index) => (
                    <InfoBarEdit
                      icon={item.icon}
                      text={item.text}
                      defaultText="링크주소를 입력하세요"
                      key={index}
                    />
                  ))}
                  <input type="text" placeholder="링크주소를 입력하세요" />
                  <div className="btn_wrap">
                    <button>추가</button>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h3>SNS</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input type="text" defaultValue="SNS 구경하기" />
                  {state.sns.map((item, index) => (
                    <InfoBarEdit
                      icon={item.icon}
                      text={item.text}
                      defaultText="링크주소를 입력하세요"
                      key={index}
                    />
                  ))}
                  <input type="text" placeholder="링크주소를 입력하세요" />
                  <div className="btn_wrap">
                    <button>추가</button>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h3>사진</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input type="text" defaultValue="사진보기" />
                  <div className="file_load_wrap">
                    <label className="file_load">
                      불러오기({imgFiles.length}/10)
                      <input
                        type="file"
                        multiple
                        onChange={(e) => onChange(e)}
                      />
                    </label>
                    {imgFiles.map((file, index) => (
                      <div className="file_name" key={index}>
                        <h4>{file.name}</h4>
                        <span onClick={() => removeFile(file)}>삭제</span>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <div className="title">
                    <h3>위치(지도)</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input type="text" defaultValue="위치보기" />
                  <input
                    type="text"
                    placeholder="네이버지도 링크주소를 입력하세요"
                  />
                  <div className="btn_wrap">
                    <button>추가</button>
                  </div>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </main>
      <div className="btn_wrap">
        <div className="btn gray">미리보기</div>
        <div className="btn blue">저장</div>
      </div>
    </EditStyle>
  );
};

export default Edit;
