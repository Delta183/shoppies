import { SearchResult } from "./SearchResult";
import SearchResultListComponent from "./SearchResultListComponent";

interface IProps {
  results: SearchResult[];
  query: string;
}

const ContentContainerComponent = (props: IProps) => {
  return (
    <div className={"content-container"}>
      <SearchResultListComponent results={props.results} query={props.query} />
      <div className={"content-list-container"}>
        <div className={"content-list-header"}>Nominated</div>
      </div>
    </div>
  );
};

export default ContentContainerComponent;
