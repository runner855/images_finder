import { AxiosResponse } from "axios";
import React, { useState } from "react";
import Call from "../api/Call";
import "../styles/SearchBar.css";

type ResultProps = {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
  };
};

type responseProps = {
  total: number;
  total_pages: number;
  results: ResultProps[];
};

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search Images Here"
          required
          onChange={handleInput}
        />
        <button id="submit" onClick={(e: any) => handleSubmit(e)}>
          Search
        </button>
      </form>
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
    </div>
  );
};
