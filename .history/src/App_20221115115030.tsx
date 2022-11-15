import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

useEffect(() => {
  axios.get("photos.json").then((response) => {
    console.log(response);
  });
});

const App = () => {
  return <div className="App">Welcome To My App</div>;
};

export default App;
