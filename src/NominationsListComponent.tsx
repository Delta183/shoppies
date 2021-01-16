import { Movie } from "./models/Movie";
import NominationComponent from "./NominationComponent";

interface IProps {
  nominations: Movie[];
  onRemoveNominationClick: (imdbID: string) => void;
}

const NominationsListComponent = (props: IProps) => {
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>Nominations</div>
      {props.nominations.map((nomination) => {
        return (
          <NominationComponent
            key={nomination.imdbID}
            imdbID={nomination.imdbID}
            nomination={nomination}
            onRemoveNominationClick={props.onRemoveNominationClick}
          />
        );
      })}
    </div>
  );
};

export default NominationsListComponent;
