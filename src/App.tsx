import React, { useState } from "react";
import { SearchResult } from "./SearchResult";
import "./App.css";
import TitleComponent from "./TitleComponent";
import SearchContainerComponent from "./SearchContainerComponent";
import ContentContainerComponent from "./ContentContainerComponent";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(Array<SearchResult>());

  const onSearchBarTextChange = async (text: string) => {
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
    <div className="app-container">
      <TitleComponent />
      <SearchContainerComponent
        input={input}
        onChange={onSearchBarTextChange}
      />
      <ContentContainerComponent results={searchResults} />
    </div>
  );
}

export default App;
