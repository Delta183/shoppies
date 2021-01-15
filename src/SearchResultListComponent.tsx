import { SearchResult } from "./SearchResult";
import SearchResultComponent from "./SearchResultComponent";

interface IProps {
  results: SearchResult[];
}

const SearchResultListComponent = ({ results }: IProps) => {
  const listStyling = {
    width: "30rem",
    background: "#F2F1F9",
    height: "10vmax",
    position: "relative" as const,
    left: "80px",
    fontsize: "15px",
  };
  return (
    <div style={listStyling}>
      {results.map((result) => {
        // This part calls on the SearchResultComponent which are all the titles
        return <SearchResultComponent key={result.imdbID} result={result} />;
      })}
    </div>
  );
};

export default SearchResultListComponent;
