import { Movie } from "./models/Movie";

interface IProps {
  key: string;
  imdbID: string;
  result: Movie;
  isNominated: boolean;
  onAddNominationClick: (imdbID: string) => void;
}

const SearchResultComponent = (props: IProps) => {
  const onClick = () => {
    props.onAddNominationClick(props.imdbID);
  };
  return (
    <div className={"search-result-container"}>
      <div>
        {props.result.Title} ({props.result.Year})
      </div>
      <button onClick={onClick} disabled={props.isNominated}>
        Nominate
      </button>
    </div>
  );
};

export default SearchResultComponent;
