import { SearchResult } from "./SearchResult";
import SearchResultListComponent from "./SearchResultListComponent";

interface IProps {
  results: SearchResult[];
}

const ContentContainerComponent = ({ results }: IProps) => {
  return (
    <div className={"content-container"}>
      <div className={"content-list-container"}>
        <div className={"content-list-header"}>Movie Results</div>
        {results.length > 0 ? (
          <SearchResultListComponent results={results} />
        ) : null}
      </div>
      <div className={"content-list-container"}>
        <div className={"content-list-header"}>Nominated</div>
      </div>
    </div>
  );
};

export default ContentContainerComponent;
