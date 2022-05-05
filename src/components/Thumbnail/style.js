import styled from "@emotion/styled";

export const ThumbnailWrapStyle = styled.div`
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 315px;
  &.thumb1 {
    .thumb {
      width: 100%;
      height: 100%;
    }
  }
  &.thumb2 {
    .thumb {
      width: 100%;
      height: 50%;
    }
  }
  &.thumb3 {
    .thumb:nth-of-type(1) {
      width: 100%;
      height: 66.66%;
    }
    .thumb:nth-of-type(2) {
      width: 50%;
      height: 33.333%;
    }
    .thumb:nth-of-type(3) {
      width: 50%;
      height: 33.333%;
    }
  }
  &.thumb4 {
    .thumb {
      width: 50%;
      height: 50%;
    }
  }
  &.thumb5 {
    .thumb:nth-of-type(1) {
      width: 50%;
      height: 66.66%;
    }
    .thumb:nth-of-type(2) {
      width: 50%;
      height: 33.333%;
    }
    .thumb:nth-of-type(3) {
      width: 50%;
      height: 33.333%;
    }
    .thumb:nth-of-type(4) {
      width: 50%;
      height: 33.333%;
    }
    .thumb:nth-of-type(5) {
      width: 50%;
      height: 33.333%;
    }
  }
  &.thumb6 {
    .thumb {
      width: 50%;
      height: 33.33%;
    }
  }
`;

export const ThumbnailStyle = styled.div`
  position: relative;
  float: left;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  .cover {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    content: "";
    font-size: 30px;
    color: #fff;
    background-color: #000;
    opacity: 0.7;
  }
`;
