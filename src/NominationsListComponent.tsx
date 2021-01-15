import { Movie } from "./Movie";
import NominationComponent from "./NominationComponent";

interface IProps {
  nominations: Movie[];
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
          />
        );
      })}
    </div>
  );
};

export default NominationsListComponent;
