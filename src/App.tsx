import React, { useState } from "react";
import logo from "./logo.svg";
import SearchBarComponent from "./SearchBarComponent";
import SearchResultListComponent from "./SearchResultListComponent";
import { SearchResult } from "./SearchResult";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(Array<SearchResult>());

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
      .then((searchResponse) => {
        const searchResponseResults: SearchResult[] = searchResponse["Search"];
        if (Array.isArray(searchResponseResults)) {
          setSearchResults(searchResponseResults);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.log(`Something went wrong: ${error}`);
      });
  };
  return (
    <div>
      <header>Shoppies</header>
      <SearchBarComponent input={input} onChange={updateInput} />
      {searchResults.length > 0 ? (
        <SearchResultListComponent results={searchResults} />
      ) : null}
    </div>
  );
}

export default App;
