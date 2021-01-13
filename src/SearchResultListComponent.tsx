import { SearchResult } from "./SearchResult";
import SearchResultComponent from "./SearchResultComponent";

interface IProps {
  results: SearchResult[];
}

const SearchResultListComponent = ({ results }: IProps) => {
  return (
    <div>
      {results.map((result) => {
        return <SearchResultComponent key={result.imdbID} result={result} />;
      })}
    </div>
  );
};

export default SearchResultListComponent;
