import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  useEffect(() => {
    axios.get("https://api.unsplash.com/s/photos/tree").then((response) => {
      console.log(response);
    });
  });
  return <div className="App">Welcome To My App</div>;
};

export default App;
