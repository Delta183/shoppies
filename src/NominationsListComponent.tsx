import { Movie } from "./Movie";
import SearchResultComponent from "./SearchResultComponent";

interface IProps {
  nominations: Movie[];
}

const NominationsListComponent = (props: IProps) => {
  return (
    <div className={"content-list-container"}>
      <div className={"content-list-header"}>Nominations</div>
      {props.nominations.map((result) => {
        // This part calls on the SearchResultComponent which are all the titles
        return (
          <SearchResultComponent
            key={result.imdbID}
            imdbID={result.imdbID}
            result={result}
            onResultClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default NominationsListComponent;
