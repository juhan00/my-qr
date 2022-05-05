import React, { useState } from "react";
import { ThumbnailWrapStyle, ThumbnailStyle } from "./style";
import main_img from "@images/main_img.png";

const initialState = [
  { url: main_img },
  { url: main_img },
  { url: main_img },
  { url: main_img },
  { url: main_img },
  { url: main_img },
  { url: main_img },
];

const index = () => {
  const [thumbnail, setThumbnail] = useState(initialState);
  const lestCnt = thumbnail.length - 6;

  return (
    <ThumbnailWrapStyle
      className={thumbnail.length > 6 ? `thumb6` : `thumb${thumbnail.length}`}>
      {thumbnail.map((item, index) =>
        index <= 5 ? (
          index === 5 && lestCnt > 0 ? (
            <ThumbnailStyle className="thumb" imgUrl={item.url} key={index}>
              <div className="cover">+{thumbnail.length - 6}</div>
            </ThumbnailStyle>
          ) : (
            <ThumbnailStyle
              className="thumb"
              imgUrl={item.url}
              key={index}></ThumbnailStyle>
          )
        ) : (
          <ThumbnailStyle
            className="thumb"
            imgUrl={item.url}
            style={{ display: "none" }}
            key={index}></ThumbnailStyle>
        ),
      )}
    </ThumbnailWrapStyle>
  );
};

export default index;
