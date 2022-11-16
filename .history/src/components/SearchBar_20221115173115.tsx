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

export const SearchBar = ({ images }:<ResultProps[]) => {
  console.log(images);
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [images, setImages] = useState<ResultProps[]>([]);

  const handleInput = (e: any) => {
    setSearchBarValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Call.get("/search/photos", {
      params: { query: searchBarValue },
    })
      .then((res) => {
        setImages(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
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
    </div>
  );
};
