import React from "react";
import "../styles/ImagesContainer.css";

export const ImagesContainer = ({ images }: ) => {
  return (
    <div className="images-card">
      {images.map(
        (item: { urls: { regular: string | undefined } }) => {
          return (
            <div
              className={`single-image `}
              key={`${item.urls.regular}-${index}`}
            >
              <img src={item.urls.regular} />
            </div>
          );
        }
      )}
    </div>
  );
};
