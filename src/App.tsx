"use strict";

import React, { useState } from "react";
import logo from "./logo.svg";
import SearchBar from "./SearchBar";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const updateInput = async (text: string) => {
    setInput(text);
  };
  return (
    <div>
      <header>Shoppies</header>
      <SearchBar input={input} onChange={updateInput} />
    </div>
  );
}

export default App;
