import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

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
    <form className="form-wrapper">
      <input type="text" id="search" placeholder="Search Imges Here" required>
        <input type="submit" value="go" id="submit">
    </form>
  </div>;

  {
    /* <form className="form-wrapper">
    <input type="text" id="search" placeholder="Search for..." required>
    <input type="submit" value="go" id="submit">
</form>


  </div>; */
  }
};

export default App;
