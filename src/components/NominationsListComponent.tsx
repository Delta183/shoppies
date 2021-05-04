import { Movie } from "../models/Movie";
import NominationComponent from "./NominationComponent";

interface IProps {
  nominations: Movie[];
  MAX_NOMINATION_LENGTH: number;
  onRemoveNominationClick: (imdbID: string) => void;
}

const NominationsListComponent = (props: IProps) => {
  let banner = <div></div>;
  if (props.nominations.length >= props.MAX_NOMINATION_LENGTH) {
    banner = <div>Bababooey</div>;
  }
  else{
    banner = <div></div>;
  }
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>Nominations</div>
      {/* Banner */}
      {banner}
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
