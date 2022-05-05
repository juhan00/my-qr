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
            src: url(../public/font/NotoSansKR-Thin.otf) format("otf");
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 300;
            src: url(../public/font/NotoSansKR-Light.otf) format("otf");
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 400;
            src: url(../public/font/NotoSansKR-Regular.otf) format("otf");
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 500;
            src: url(../public/font/NotoSansKR-Medium.otf) format("otf");
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 700;
            src: url(../public/font/NotoSansKR-Bold.otf) format("otf");
          }
          @font-face {
            font-family: "Noto Sans KR";
            font-weight: 900;
            src: url(../public/font/NotoSansKR-Black.otf) format("otf");
          }
          @font-face {
            font-family: "Roboto";
            font-weight: 100;
            src: url(../public/font/Roboto-Thin.ttf) format("ttf");
          }
          @font-face {
            font-family: "Roboto";
            font-weight: 300;
            src: url(../public/font/Roboto-Light.ttf) format("ttf");
          }
          @font-face {
            font-family: "Roboto";
            font-weight: 400;
            src: url(../public/font/Roboto-Regular.ttf) format("ttf");
          }
          @font-face {
            font-family: "Roboto";
            font-weight: 500;
            src: url(../public/font/Roboto-Medium.ttf) format("ttf");
          }
          @font-face {
            font-family: "Roboto";
            font-weight: 700;
            src: url(../public/font/Roboto-Bold.ttf) format("ttf");
          }
          @font-face {
            font-family: "Roboto";
            font-weight: 900;
            src: url(../public/font/Roboto-Black.ttf) format("ttf");
          }

          font-family: "Noto Sans KR", sans-serif;
        }
        body {
          font-size: 14px;
          font-weight: 400;
        }
        a {
          color: #fff;
          text-decoration: none;
          outline: none;
        }

        a:hover,
        a:active {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
