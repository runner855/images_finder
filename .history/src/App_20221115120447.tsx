import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = (props) => {
 
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=zPi6Sflx5W_C6I12Yz8pN2jo8yqja4-6pH25LhpvtbI"
      )
      .then((response) => {
        console.log(response);
      });
  });

  const ciao = {
    Response.props
  }
  return <div className="App">Welcome To My App</div>;
};

export default App;
