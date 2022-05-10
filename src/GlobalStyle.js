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
import icApp from "@images/ic_info_app.png";
import icSns from "@images/ic_info_sns.png";
import icPicture from "@images/ic_info_picture.png";
import icLocation from "@images/ic_info_location.png";
import btnNav from "@images/btn_nav.png";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        // 공통설정
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
        #root {
          background-color: #f7f7f7;
          min-height: 100vh;
        }
        body {
          font-size: 14px;
          font-weight: 400;
          font-family: "Noto Sans KR", sans-serif;
        }
        a {
          text-decoration: none;
          outline: none;
        }

        a:hover,
        a:active {
          text-decoration: none;
        }
        textarea {
          resize: none;
          outline-color: #000;
          &::placeholder {
            color: #ccc;
          }
        }

        input {
          width: 100%;
          height: 50px;
          border: 0px;
          border-radius: 10px;
          font-size: 15px;
          color: #000;
          padding: 0 14px;
          outline-color: #000;
          &::placeholder {
            color: #ccc;
          }
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

        // nav 버튼
        .btn_nav {
          width: 40px;
          height: 40px;
          background: url(${btnNav}) 50% 50% no-repeat;
          background-size: 25.5px 19px;
          font-size: 0px;
          border: 0px;
        }

        // 버튼
        .btn_wrap {
          display: flex;
          & > .btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 62px;
            font-size: 20px;
            font-weight: 400;
            letter-spacing: -0.4px;
            border: 0px;

            &.round {
              height: 50px;
              border-radius: 10px;
              font-size: 16px;
              font-weight: 400;
              letter-spacing: -0.32px;
            }
            &.gray {
              color: #222;
              font-weight: 400;
              background-color: #eee;
            }
            &.green {
              color: #fff;
              background-color: #25bcb3;
              font-weight: 700;
            }
            &.dim {
              color: #fff;
              font-weight: 400;
              background-color: #ccc;
            }
          }
        }
        // 수정버튼
        .btn_edit {
          width: 25px;
          height: 25px;
          background: url(${btnEdit}) 50% 50% no-repeat;
          background-size: 25px 25px;
          border: 0px;
          font-size: 0px;
        }

        // 아이콘
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
          &.ic_app {
            background: url(${icApp});
            background-size: 50px 50px;
          }
          &.ic_sns {
            background: url(${icSns});
            background-size: 50px 50px;
          }
          &.ic_picture {
            background: url(${icPicture});
            background-size: 50px 50px;
          }
          &.ic_location {
            background: url(${icLocation});
            background-size: 50px 50px;
          }
        }

        // PC버전
        @media screen and (min-width: 769px) {
          body {
            display: flex;
            justify-content: center;
            #root {
              display: inline-block;
              max-width: 400px;
              width: 400px;
              zoom: 1;
              .bg_image {
                max-width: 400px;
                left: 50%;
                transform: translate(-50%);
              }
              .btn_wrap {
                &.fixed {
                  width: 400px;
                }
              }
            }
          }
        }
      `}
    />
  );
};

export default GlobalStyle;
