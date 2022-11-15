import * as React from "react";
import "../styles/SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search Images Here"
          required
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
