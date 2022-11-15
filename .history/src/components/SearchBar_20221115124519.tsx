import React, { useState } from "react";
import "../styles/SearchBar.css";

export const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");

  const handleInput = (e: any) => {
    setSearchBarValue(e.target.value);
    console.log(searchBarValue);
  };
  return (
    <div className="search-bar">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search Images Here"
          required
          handleChange={handleInput}
        />
        <input
          type="submit"
          value="go"
          id="submit"
          onClick={() => console.log("i am here")}
        />
      </form>
    </div>
  );
};
