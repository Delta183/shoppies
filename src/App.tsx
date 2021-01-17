import React, { useState } from "react";
import { Movie } from "./models/Movie";
import "./App.css";
import TitleComponent from "./components/TitleComponent";
import SearchContainerComponent from "./components/SearchContainerComponent";
import ContentContainerComponent from "./components/ContentContainerComponent";
import debounce from "./helpers/debounce";
import searchMoviesWithQuery from "./helpers/omdb_api";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(Array<Movie>());
  const [nominations, setNominations] = useState(Array<Movie>());

  // TODO: limit to 5 nominations and group commmon code
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
      // Finally add a check for if there are 5 elements present
      if (nominations.length < 5) {
        const foundResult = searchResults[foundIndex];
        const existingNominations = [...nominations];
        existingNominations.push(foundResult);
        setNominations(existingNominations);
      } else {
        alert(
          "Cannot add more nominations. Please remove one to add a new nomination."
        );
      }
    }
  };

  const removeNomination = async (imdbID: string) => {
    const existingNominations = nominations.filter(
      (nomination) => nomination.imdbID !== imdbID
    );
    setNominations(existingNominations);
  };

  const performSearch = async (query: string) => {
    searchMoviesWithQuery(query, (results, error) => {
      setSearchResults(results);
    });
  };

  const onSearchBarTextChange = async (text: string) => {
    setInput(text);
    const debouncedFunction = debounce(function () {
      performSearch(text);
    }, 500);
    debouncedFunction();
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
