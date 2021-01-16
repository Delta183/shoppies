import { Movie } from "./models/Movie";
import SearchResultComponent from "./SearchResultComponent";

function isNominated(nominations: Movie[], imdbID: string): boolean {
  var foundIndex = -1;
  for (var i = 0; i < nominations.length; i++) {
    const nomination = nominations[i];
    if (nomination.imdbID === imdbID) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex !== -1;
}

interface IProps {
  results: Movie[];
  query: string;
  nominations: Movie[];
  onAddNominationClick: (imdbID: string) => void;
}

const SearchResultListComponent = (props: IProps) => {
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>
        {props.query === null || props.query.length === 0
          ? "Results"
          : `Results for "${props.query}"`}
      </div>
      {props.results.map((result) => {
        // This part calls on the SearchResultComponent which are all the titles
        return (
          <SearchResultComponent
            key={result.imdbID}
            imdbID={result.imdbID}
            result={result}
            isNominated={isNominated(props.nominations, result.imdbID)}
            onAddNominationClick={props.onAddNominationClick}
          />
        );
      })}
    </div>
  );
};

export default SearchResultListComponent;
