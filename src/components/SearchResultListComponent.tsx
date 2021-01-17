import { Movie } from "../models/Movie";
import SearchResultComponent from "./SearchResultComponent";
import findMovieByImdbId from "../helpers/movie_array_helpers";

interface IProps {
  results: Movie[];
  query: string;
  nominations: Movie[];
  searchResultError: Error | null;
  onAddNominationClick: (imdbID: string) => void;
}

const isTooManyResultsError = (error: Error | null): boolean => {
  if (error === null) {
    return false;
  }
  const errorMessage = error.message;
  return errorMessage === "Too many results.";
};

const SearchResultListComponent = (props: IProps) => {
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>
        {props.query === null || props.query.length === 0
          ? "Results"
          : `Results for "${props.query}"`}
      </div>
      {isTooManyResultsError(props.searchResultError) ? (
        <div className={"too-many-results-label"}>
          Too many results were returned, please make your query more specific.
        </div>
      ) : (
        props.results.map((result) => {
          // This part calls on the SearchResultComponent which are all the titles
          return (
            <SearchResultComponent
              key={result.imdbID}
              imdbID={result.imdbID}
              result={result}
              isNominated={
                findMovieByImdbId(result.imdbID, props.nominations) !== null
              }
              onAddNominationClick={props.onAddNominationClick}
            />
          );
        })
      )}
    </div>
  );
};

export default SearchResultListComponent;
