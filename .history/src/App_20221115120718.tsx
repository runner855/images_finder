import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = (props: {}) => {
  console.log(props);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=zPi6Sflx5W_C6I12Yz8pN2jo8yqja4-6pH25LhpvtbI"
      )
      .then((response) => {
        console.log(response);
      });
  });

  return <div className="App">Welcome To My App</div>;
};

export default App;
