import React from "react";
import "./App.css";

axios.get("https://unsplash.com/s/photos").then(
  (response) => {
    console.log(response.data);
  },
  (error) => {
    console.log(error);
  }
);

function App() {
  return <div className="App">Welcome To My App</div>;
}

export default App;
