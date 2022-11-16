import React, { useEffect } from "react";
import "../styles/App.css";
import { SearchBar } from "./SearchBar";

const App = () => {
  console.log(process.env.REACT_APP_CLIENT_ID);

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
