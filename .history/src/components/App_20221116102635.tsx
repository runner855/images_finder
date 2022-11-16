import React, { useState } from "react";
import "../styles/App.css";
import { ImagesContainer } from "../components/ImagesContainer";
import { SearchBar } from "./SearchBar";

export const App = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [images, setImages] = useState<ResultProps[]>([]);

  const handleInput = (e: any) => {
    setSearchBarValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Call.get("/search/photos", {
      params: { query: searchBarValue },
    })
      .then((res) => {
        setImages(res.data.results);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Let's Find Some Images!!</h1>
      </div>

      <SearchBar />
      <ImagesContainer />
    </div>
  );
};

export default App;
