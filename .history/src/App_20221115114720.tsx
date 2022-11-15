import React from "react";
import axios from "axios";
import "./App.css";

axios.get("https://unsplash.com/photos/").then((response) => {
  console.log(response.data);
});

function App() {
  return <div className="App">Welcome To My App</div>;
}

export default App;
