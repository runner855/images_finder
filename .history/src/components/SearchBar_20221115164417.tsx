import React, { useState } from "react";
import Call from "../api/Call";
import "../styles/SearchBar.css";

type responseProps = {};

export const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [images, setImages] = useState<string>("");

  const handleInput = (e: any) => {
    setSearchBarValue(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await Call.get("/search/photos", {
      params: { query: searchBarValue },
    }).then((res) => {
      return res.data;
    }).catch(err =>{
      console.log(err)
  }

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
