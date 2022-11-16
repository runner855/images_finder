import React from "react";
import "../styles/ImagesContainer.css";
import { ResultProps } from "./App";

type ImagesContainerProps = {
  images: ResultProps[];
};

export const ImagesContainer = ({ images }: ImagesContainerProps) => {
  return (
    <div className="images-card">
      {images.map((item, index) => {
        return (
          <div
            className={`single-image `}
            key={`${item.urls.regular}-${index}`}
          >
            <img src={item.urls.regular} />
          </div>
        );
      })}
    </div>
  );
};
