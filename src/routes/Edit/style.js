import styled from "@emotion/styled";
import btnfileDel from "@images/ic_file_delete.png";

export const EditStyle = styled.div`
  main {
    .top_btn_wrap {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      button {
        width: 120px;
        height: 40px;
        background-color: #ececec;
        border: 0px;
        border-radius: 20px;
        font-size: 14px;
        color: #000;
        &.active {
          color: #fff;
          background-color: #25bcb3;
        }
      }
      & > button + button {
        margin-left: 10px;
      }
    }

    .bg_wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 55px;
      .img_wrap {
        position: relative;
        width: 115px;
        height: 170px;
        & > img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
        & > button {
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
      }

      & > p {
        width: 100%;
        margin-top: 15px;
        text-align: center;
        color: #666;
        font-size: 13px;
      }
    }

    & > ul {
      padding: 50px 30px 268px;
      & > li {
        & > h2 {
          color: #222;
          font-size: 15px;
          margin-bottom: 15px;
          & > span {
            color: #222;
            font-size: 10px;
          }
        }
        & > textarea {
          width: 100%;
          height: 150px;
          border: 0px;
          border-radius: 12px;
          padding: 20px;
          &.title {
            font-size: 30px;
            line-height: 1.33;
            letter-spacing: -0.9px;
          }
          &.descript {
            font-size: 14px;
            line-height: 1.51;
          }
        }

        section.qr_edit {
          & > ul {
            & > li {
              border-top: 1px dashed #ddd;
              padding: 36px 0;

              .title {
                display: flex;
                align-items: center;
                margin-bottom: 30px;
                & > h3 {
                  font-size: 20px;
                  font-weight: 700;
                }
                & > button {
                  margin-left: auto;
                }
              }
              .file_load_wrap {
                margin-top: 10px;
                .file_load {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-bottom: 18px;
                  width: 100%;
                  height: 50px;
                  background-color: #eee;
                  border-radius: 10px;
                  border: 0px;
                  font-size: 16px;
                  color: #000;
                  & > input[type="file"] {
                    display: none;
                  }
                }
                .file_name {
                  display: flex;
                  align-items: center;
                  padding: 0 10px;
                  & > h4 {
                    font-size: 15px;
                    color: #000;
                    width: calc(100% - 50px);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                  & > span {
                    margin-left: auto;
                    width: 30px;
                    height: 30px;
                    background: url(${btnfileDel}) 50% 50% no-repeat;
                    background-size: 30px 30px;
                    font-size: 0px;
                  }
                }
                .file_name + .file_name {
                  margin-top: 10px;
                }
              }
              & > .btn_wrap {
                display: flex;
                margin-top: 10px;
                & > button {
                  width: 100%;
                  height: 50px;
                  background-color: #eee;
                  border-radius: 10px;
                  border: 0px;
                  font-size: 16px;
                  color: #000;
                }
                & > button + button {
                  margin-left: 10px;
                }
              }

              & > input + input {
                margin-top: 10px;
              }
            }
            & > li:last-of-type {
              border-bottom: 1px dashed #ddd;
            }
          }
        }
      }
      & > li + li {
        margin-top: 50px;
      }
    }
  }
  & > .btn_wrap {
    &.fixed {
      z-index: 999;
      position: fixed;
      width: inherit;
      max-width: inherit;
      bottom: 0px;
    }
  }
`;
