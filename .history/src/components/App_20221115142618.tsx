import React, { useEffect } from "react";
import * as dotenv from "dotenv";
import axios from "axios";
import "../styles/App.css";
import { SearchBar } from "./SearchBar";

const App = () => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=zPi6Sflx5W_C6I12Yz8pN2jo8yqja4-6pH25LhpvtbI"
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
