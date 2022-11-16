import React, { useState } from "react";
import "../styles/App.css";
import { ImagesContainer } from "../components/ImagesContainer";
import { SearchBar } from "./SearchBar";

export const App = () => {
  const [resultImages, setResultImages] = useState();
  return (
    <div className="App">
      <div className="title">
        <h1>Let's Find Some Images!!</h1>
      </div>

      <SearchBar />
      <ImagesContainer setResultImages={(img) => setResultImages(img)} />
    </div>
  );
};

export default App;
