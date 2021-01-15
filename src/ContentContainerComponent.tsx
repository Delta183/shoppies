import { SearchResult } from "./SearchResult";
import SearchResultListComponent from "./SearchResultListComponent";

interface IProps {
  results: SearchResult[];
}

const ContentContainerComponent = ({ results }: IProps) => {
  return (
    <div className={"content-container"}>
      <SearchResultListComponent results={results} />
      <div className={"content-list-container"}>
        <div className={"content-list-header"}>Nominated</div>
      </div>
    </div>
  );
};

export default ContentContainerComponent;
