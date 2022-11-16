import { AxiosResponse } from "axios";
import React, { useState } from "react";
import Call from "../api/Call";
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
          onChange={handleInput}
        />
        <button id="submit" onClick={(e: any) => handleSubmit(e)}>
          Search
        </button>
      </form>
    </div>
  );
};
