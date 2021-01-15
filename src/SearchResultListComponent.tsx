import { SearchResult } from "./SearchResult";
import SearchResultComponent from "./SearchResultComponent";

interface IProps {
  results: SearchResult[];
}

const SearchResultListComponent = ({ results }: IProps) => {
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>Movie Results</div>
      {results.map((result) => {
        // This part calls on the SearchResultComponent which are all the titles
        return <SearchResultComponent key={result.imdbID} result={result} />;
      })}
    </div>
  );
};

export default SearchResultListComponent;
