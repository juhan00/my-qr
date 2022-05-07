import React from "react";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import btnEdit from "@images/btn_edit.png";
import btnCheckboxOn from "@images/btn_checkbox_on.png";
import btnCheckboxOff from "@images/btn_checkbox_off.png";
import icCall from "@images/ic_info_call.png";
import icEmail from "@images/ic_info_email.png";
import icHomepage from "@images/ic_info_homepage.png";
import icAppleStore from "@images/ic_info_apple_store.png";
import icGooglePlay from "@images/ic_info_google_play.png";
import icOneStore from "@images/ic_info_one_store.png";
import icInstagram from "@images/ic_info_instagram.png";
import icFacebook from "@images/ic_info_facebook.png";
import icTwitter from "@images/ic_info_twitter.png";
import icYoutube from "@images/ic_info_youtube.png";

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
        textarea {
          resize: none;
        }
        textarea::placeholder,
        input::placeholder {
          color: #ccc;
        }

        .btn_wrap {
          display: flex;
          & > .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 68px;
            font-size: 20px;
            letter-spacing: -0.4px;
            &.gray {
              color: #222;
              background-color: #eee;
            }
            &.blue {
              color: #fff;
              background-color: #009ff2;
            }
          }
        }

        .btn_edit {
          width: 25px;
          height: 25px;
          background: url(${btnEdit}) 50% 50% no-repeat;
          background-size: 25px 25px;
          border: 0px;
          font-size: 0px;
        }

        .checkbox {
          width: 20px;
          height: 20px;
          border-radius: 3px;
          background: url(${btnCheckboxOff}) 50% 50% no-repeat;
          background-size: 20px 20px;
          font-size: 0px;
          border: 1px solid #ddd;
          &.active {
            background: url(${btnCheckboxOn}) 50% 50% no-repeat;
            background-size: 20px 20px;
            border: 1px solid #0aaf63;
          }
        }

        .icon {
          width: 50px;
          height: 50px;
          &.ic_call {
            background: url(${icCall});
            background-size: 50px 50px;
          }
          &.ic_email {
            background: url(${icEmail});
            background-size: 50px 50px;
          }
          &.ic_homepage {
            background: url(${icHomepage});
            background-size: 50px 50px;
          }
          &.ic_appleStore {
            background: url(${icAppleStore});
            background-size: 50px 50px;
          }
          &.ic_googlePlay {
            background: url(${icGooglePlay});
            background-size: 50px 50px;
          }
          &.ic_oneStore {
            background: url(${icOneStore});
            background-size: 50px 50px;
          }
          &.ic_instagram {
            background: url(${icInstagram});
            background-size: 50px 50px;
          }
          &.ic_facebook {
            background: url(${icFacebook});
            background-size: 50px 50px;
          }
          &.ic_twitter {
            background: url(${icTwitter});
            background-size: 50px 50px;
          }
          &.ic_youtube {
            background: url(${icYoutube});
            background-size: 50px 50px;
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
