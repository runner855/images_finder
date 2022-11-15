import React, { useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { SearchBar } from "./SearchBar";

const App = () => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?+’${process.env.REACT_APP_CLIENT_ID}’"
      )
      .then((response) => {
        const images = response.data;
        console.log(images[0].user.name);
      });
  });

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
