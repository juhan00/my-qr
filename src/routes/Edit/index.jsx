import React, { useState } from "react";
import { EditStyle } from "./style";
import EditList from "@components/EditList";
import SubHeader from "@components/SubHeader";
import main_img from "@images/main_img.png";

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

const Edit = () => {
  const [infoText, setInfoText] = useState(initialInfoText);
  const [qrData, setQrData] = useState(initialQrData);
  const [mapData, setMapData] = useState(initialMapData);
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
      <SubHeader title="QR정보 등록" />

      <main>
        <div className="top_btn_wrap">
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
              placeholder="제목을 입력하세요"
              defaultValue={infoText.title}></textarea>
          </li>
          <li>
            <h2>
              설명문구 <span>(선택)</span>
            </h2>
            <textarea
              className="descript"
              placeholder="부가설명을 입력하세요"
              defaultValue={infoText.descript}></textarea>
          </li>
          <li>
            <h2>
              QR 정보 <span>(최소 1개이상 선택)</span>
            </h2>
            <section className="qr_edit">
              <ul>
                {qrData.map((item) => (
                  <li key={item.index}>
                    <EditList category={item.category} />
                  </li>
                ))}
                <li>
                  <div className="title">
                    <h3>사진</h3>
                    <button className="checkbox active">체크박스</button>
                  </div>
                  <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    defaultValue="사진보기"
                  />
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
                  <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    defaultValue="위치보기"
                  />
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
      <div className="btn_wrap fixed">
        <button className="btn gray">미리보기</button>
        <button className="btn green">저장</button>
      </div>
    </EditStyle>
  );
};

export default Edit;
