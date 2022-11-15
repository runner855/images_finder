import React, { useEffect } from "react";
import 
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
        console.log("here", response);
      });
  });

  return <div className="App">
    <SearchBar/>
  </div>;
};

export default App;
