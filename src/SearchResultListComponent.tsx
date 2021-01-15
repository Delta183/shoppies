import { SearchResult } from "./SearchResult";
import SearchResultComponent from "./SearchResultComponent";

interface IProps {
  results: SearchResult[];
  query: string;
}

const SearchResultListComponent = (props: IProps) => {
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>
        {props.query === null ? "Results" : `Results for "${props.query}"`}
      </div>
      {props.results.map((result) => {
        // This part calls on the SearchResultComponent which are all the titles
        return <SearchResultComponent key={result.imdbID} result={result} />;
      })}
    </div>
  );
};

export default SearchResultListComponent;
