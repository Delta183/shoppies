import { Movie } from "./models/Movie";
import NominationsListComponent from "./NominationsListComponent";
import SearchResultListComponent from "./SearchResultListComponent";

interface IProps {
  results: Movie[];
  nominations: Movie[];
  query: string;
  onAddNominationClick: (imdbID: string) => void;
  onRemoveNominationClick: (imdbID: string) => void;
}

const ContentContainerComponent = (props: IProps) => {
  return (
    <div className={"content-container"}>
      <SearchResultListComponent
        results={props.results}
        query={props.query}
        nominations={props.nominations}
        onAddNominationClick={props.onAddNominationClick}
      />
      <NominationsListComponent
        nominations={props.nominations}
        onRemoveNominationClick={props.onRemoveNominationClick}
      />
    </div>
  );
};

export default ContentContainerComponent;
