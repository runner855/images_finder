import React, { useState } from "react";
import Call from "../api/Call";
import "../styles/SearchBar.css";

type SearchBarProps = {
  urls: any;
};

export const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [images, setImages] = useState<Object>({});

  const handleInput = (e: any) => {
    setSearchBarValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Call.get("/search/photos", { params: { query: searchBarValue } }).then(
      (res) => {
        const data: [] = res.data.results;
        console.log(data);
        // const parsedImages = data.filter(
        //   (image) => imageResult.data[0].media_type === "image"
        // );
        // const images = parsedImages.map((image) => image.links[0].href);
        // return images;
      }
    );
  };
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
        <button id="submit" onClick={(e) => handleSubmit(e)}>
          Search
        </button>
      </form>
      <div>{urls}</div>
    </div>
  );
};
