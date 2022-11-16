import React from "react";
import "../styles/SearchBar.css";

export const SearchBar = ({ handleSubmit, searchBarValue }: any) => {
  return (
    <div className="search-bar">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search Images Here"
          required
          onChange={searchBarValue}
        />
        <button
          id="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
};
