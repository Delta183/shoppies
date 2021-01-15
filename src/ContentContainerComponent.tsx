import { SearchResult } from "./SearchResult";
import SearchResultListComponent from "./SearchResultListComponent";

interface IProps {
  results: SearchResult[];
  query: string;
  onResultClick: (imdbID: string) => void;
}

const ContentContainerComponent = (props: IProps) => {
  return (
    <div className={"content-container"}>
      <SearchResultListComponent
        results={props.results}
        query={props.query}
        onResultClick={props.onResultClick}
      />
      <div className={"content-list-container"}>
        <div className={"content-list-header"}>Nominated</div>
      </div>
    </div>
  );
};

export default ContentContainerComponent;
