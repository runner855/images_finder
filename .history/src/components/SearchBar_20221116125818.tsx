import React from "react";
import "../styles/SearchBar.css";

type searchBarProps = {
  searchBarValue: string;
  setSearchBarValue: (text: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SearchBar = ({
  handleSubmit,
  setSearchBarValue,
  searchBarValue,
}: searchBarProps) => {
  return (
    <div className="search-bar">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          placeholder="Search Images Here"
          required
          onChange={(e) => setSearchBarValue(e.target.value)}
          value={searchBarValue}
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

// className="search-input"
//             type="text"
//             onChange={(e) => setValue(e.target.value)}
//             value={value}
//             placeholder={"Create Your Tasks!!"}
