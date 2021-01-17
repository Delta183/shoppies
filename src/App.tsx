import React, { useState } from "react";
import { Movie } from "./models/Movie";
import "./App.css";
import TitleComponent from "./components/TitleComponent";
import SearchContainerComponent from "./components/SearchContainerComponent";
import ContentContainerComponent from "./components/ContentContainerComponent";
import debounce from "./helpers/debounce";
import searchMoviesWithQuery from "./helpers/omdb_api";
import findMovieByImdbId from "./helpers/movie_array_helpers";
import useLocalStorage from "./helpers/local_storage_hook";
import AttributionComponent from "./components/AttributionComponent";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState(Array<Movie>());
  const [nominations, setNominations] = useLocalStorage(
    "nominations",
    Array<Movie>()
  );
  const [hasTooManyResults, setHasTooManyResults] = useState(false);

  const addNomination = async (imdbID: string) => {
    if (nominations.length >= 5) {
      alert(
        "Cannot add more nominations. Please remove one to add a new nomination."
      );
      return;
    }

    const movie = findMovieByImdbId(imdbID, searchResults);

    if (movie !== null) {
      setNominations((previousNominations: Movie[]) => {
        const existingNominations = [...previousNominations];
        existingNominations.push(movie);
        return existingNominations;
      });
    }
  };

  const removeNomination = async (imdbID: string) => {
    setNominations((previousNominations: Movie[]) => {
      const existingNominations = previousNominations.filter(
        (nomination: Movie) => nomination.imdbID !== imdbID
      );
      return existingNominations;
    });
  };

  const handleErrorIfNeeded = async (error: Error | null) => {
    setHasTooManyResults(false);

    if (error === null) {
      return;
    }

    const errorMessage = error.message;

    if (errorMessage === "Too many results.") {
      setHasTooManyResults(true);
    } else if (errorMessage !== "Movie not found!") {
      alert(
        `Oops, something went wrong. Please try your query again. Error Reason: ${errorMessage}`
      );
    }
  };

  const performSearch = async (query: string) => {
    searchMoviesWithQuery(query, (results, error) => {
      setSearchResults(results);
      handleErrorIfNeeded(error);
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
        hasTooManyResults={hasTooManyResults}
        results={searchResults}
        nominations={nominations}
        query={input}
        onAddNominationClick={addNomination}
        onRemoveNominationClick={removeNomination}
      />
      <AttributionComponent />
    </div>
  );
}

export default App;
