import { Movie } from "./Movie";
import SearchResultComponent from "./SearchResultComponent";

interface IProps {
  results: Movie[];
  query: string;
  onResultClick: (imdbID: string) => void;
}

const SearchResultListComponent = (props: IProps) => {
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>
        {props.query === null ? "Results" : `Results for "${props.query}"`}
      </div>
      {props.results.map((result) => {
        // This part calls on the SearchResultComponent which are all the titles
        return (
          <SearchResultComponent
            key={result.imdbID}
            imdbID={result.imdbID}
            result={result}
            onResultClick={props.onResultClick}
          />
        );
      })}
    </div>
  );
};

export default SearchResultListComponent;
