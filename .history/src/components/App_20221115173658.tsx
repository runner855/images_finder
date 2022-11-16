import React from "react";
import "../styles/App.css";
import { Images } from "../components/SearchBar";
import { SearchBar } from "./SearchBar";

export const App = () => {
  return (
    <div className="App">
      <div className="title">
        <h1>Let's Find Some Images!!</h1>
      </div>

      <SearchBar />
      {Images}
    </div>
  );
};
