import React from "react";

export const ImagesContainer = ({ images }: any) => {
  return (
    <div className="images-card">
      {images.map((item, index) => {
        const data = images;

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
