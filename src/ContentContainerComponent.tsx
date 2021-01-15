import { SearchResult } from "./SearchResult";
import SearchResultListComponent from "./SearchResultListComponent";
import ContentHeadersComponent from "./ContentHeadersComponent";

interface IProps {
  results: SearchResult[];
}

const ContentContainerComponent = ({ results }: IProps) => {
  return (
    <div>
      <ContentHeadersComponent />
      {results.length > 0 ? (
        <SearchResultListComponent results={results} />
      ) : null}
    </div>
  );
};

export default ContentContainerComponent;
