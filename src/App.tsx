"use strict";

import React, { useState } from "react";
import logo from "./logo.svg";
import SearchBar from "./SearchBar";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const updateInput = async (text: string) => {
    setInput(text);

    fetch(
      `http://www.omdbapi.com/?apikey=c923b464&s=${encodeURIComponent(
        text
      )}&type=movie`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((movies) => {
        console.log(`Search Results: ${JSON.stringify(movies)}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <header>Shoppies</header>
      <SearchBar input={input} onChange={updateInput} />
    </div>
  );
}

export default App;
