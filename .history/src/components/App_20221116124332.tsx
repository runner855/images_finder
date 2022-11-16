import React, { useState } from "react";
import Call from "../api/Call";
import "../styles/App.css";
import { ImagesContainer } from "../components/ImagesContainer";
import { SearchBar } from "./SearchBar";

export type ResultProps = {
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
  };
};

export const App = () => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [images, setImages] = useState<ResultProps[]>([]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    Call.get("/search/photos", {
      params: { query: searchBarValue },
    }).then((res) => {
      setImages(res.data.results);
    });
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Let's Find Some Images!!</h1>
      </div>

      <SearchBar
        handleSubmit={() => handleSubmit}
        searchBarValue={searchBarValue}
        setSearchBarValue={(text: string) => setSearchBarValue(text)}
      />
      <ImagesContainer images={images} />
    </div>
  );
};

export default App;
