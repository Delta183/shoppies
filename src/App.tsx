import React, { useState } from "react";
import { Movie } from "./Movie";
import "./App.css";
import TitleComponent from "./TitleComponent";
import SearchContainerComponent from "./SearchContainerComponent";
import ContentContainerComponent from "./ContentContainerComponent";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(Array<Movie>());
  const [nominations, setNominations] = useState(Array<Movie>());

  const addNomination = async (imdbID: string) => {
    var foundIndex = -1;
    for (var i = 0; i < searchResults.length; i++) {
      const searchResult = searchResults[i];
      if (searchResult.imdbID === imdbID) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== -1) {
      // TODO: Remove if already existing in nominations
      const foundResult = searchResults[foundIndex];
      const existingNominations = [...nominations];
      existingNominations.push(foundResult);
      setNominations(existingNominations);
    }
  };

  const removeNomination = async (imdbID: string) => {
    const existingNominations = nominations.filter(
      (nomination) => nomination.imdbID !== imdbID
    );
    setNominations(existingNominations);
  };

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
        const searchResponseResults: Movie[] = searchResponse["Search"];
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
      <ContentContainerComponent
        results={searchResults}
        nominations={nominations}
        query={input}
        onAddNominationClick={addNomination}
        onRemoveNominationClick={removeNomination}
      />
    </div>
  );
}

export default App;
