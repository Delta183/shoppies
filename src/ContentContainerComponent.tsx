import { nodeModuleNameResolver } from "typescript";
import { Movie } from "./Movie";
import NominationsListComponent from "./NominationsListComponent";
import SearchResultListComponent from "./SearchResultListComponent";

interface IProps {
  results: Movie[];
  nominations: Movie[];
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
      <NominationsListComponent nominations={props.nominations} />
    </div>
  );
};

export default ContentContainerComponent;
