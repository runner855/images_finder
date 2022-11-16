import React, { useState } from "react";
import Call from "../api/Call";
import "../styles/SearchBar.css";

export const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const handleInput = (e: any) => {
    setSearchBarValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Call.get("/search/photos", { params: { query: searchBarValue } }).then(
      (res) => {
        console.log(res);
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
        {res}
      </form>
    </div>
  );
};
