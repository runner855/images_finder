import React, { useState } from "react";
import Call from "../api/Call";
import "../styles/App.css";
import { ImagesContainer } from "../components/ImagesContainer";
import { SearchBar } from "./SearchBar";

export const App = () => {
  type ResultProps = {
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
    };
  };

  type responseProps = {
    total: number;
    total_pages: number;
    results: ResultProps[];
  };

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

      <SearchBar handleSubmit={handleSubmit} handleInput={handleInput} />
      <ImagesContainer images={images} />
    </div>
  );
};

export default App;
