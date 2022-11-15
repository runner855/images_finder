import React, { useState } from "react";
import Call from "../api/Call";
import "../styles/SearchBar.css";

export const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const handleInput = (e: any) => {
    setSearchBarValue(e.target.value);
    console.log(searchBarValue);
  };

  const handleSubmit = () => {
    Call.get("/search/photos/", { params: { query: searchBarValue } });
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
        <input type="submit" value="go" id="submit" onClick={() => Call} />
      </form>
    </div>
  );
};
