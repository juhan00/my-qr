import React from "react";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 100;
            src: url(../public/font/NotoSansKR-Thin.otf);
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 300;
            src: url(../public/font/NotoSansKR-Light.otf);
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 400;
            src: url(../public/font/NotoSansKR-Regular.otf);
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 500;
            src: url(../public/font/NotoSansKR-Medium.otf);
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 700;
            src: url(../public/font/NotoSansKR-Bold.otf);
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 900;
            src: url(../public/font/NotoSansKR-Black.otf);
          }
          font-family: "Noto Sans KR", sans-serif;
        }
        body {
          font-size: 14px;
        }
      `}
    />
  );
};

export default GlobalStyle;
