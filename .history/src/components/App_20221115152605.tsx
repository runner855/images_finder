import React, { useEffect } from "react";
import "../styles/App.css";
import { SearchBar } from "./SearchBar";

const App = () => {
  return (
    <div className="App">
      <div className="title">
        <h1>Let's Find Some Images!!</h1>
      </div>

      <SearchBar />
    </div>
  );
};

export default App;
