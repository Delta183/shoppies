import React, { useState } from "react";
import { Movie } from "./models/Movie";
import "./App.css";
import TitleComponent from "./components/TitleComponent";
import SearchContainerComponent from "./components/SearchContainerComponent";
import ContentContainerComponent from "./components/ContentContainerComponent";
import debounce from "./helpers/debounce";
import searchMoviesWithQuery from "./helpers/omdb_api";
import findMovieByImdbId from "./helpers/movie_array_helpers";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(Array<Movie>());
  const [nominations, setNominations] = useState(Array<Movie>());

  const addNomination = async (imdbID: string) => {
    if (nominations.length >= 5) {
      alert(
        "Cannot add more nominations. Please remove one to add a new nomination."
      );
      return;
    }

    const movie = findMovieByImdbId(imdbID, searchResults);

    if (movie !== null) {
      setNominations((previousNominations) => {
        const existingNominations = [...previousNominations];
        existingNominations.push(movie);
        return existingNominations;
      });
    }
  };

  const removeNomination = async (imdbID: string) => {
    setNominations((previousNominations) => {
      const existingNominations = previousNominations.filter(
        (nomination) => nomination.imdbID !== imdbID
      );
      return existingNominations;
    });
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
