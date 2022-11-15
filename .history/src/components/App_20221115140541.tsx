import React, { useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import { SearchBar } from "./SearchBar";

const App = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=zPi6Sflx5W_C6I12Yz8pN2jo8yqja4-6pH25LhpvtbI"
      )
      .then((response) => {
        // console.log("here", response);
        const images = response;
        console.log(images.data[0].user);
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
