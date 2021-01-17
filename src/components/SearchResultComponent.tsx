import { Movie } from "../models/Movie";

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
    <div className={"movie-item-container"}>
      <img
        className={"movie-item-image"}
        src={props.result.Poster}
        alt={`Movie poster for ${props.result.Title} (${props.result.Year})`}
      />
      <div className={"movie-item-title"}>
        {`${props.result.Title} (${props.result.Year})`}
      </div>
      <button
        className={"base-button nominate-button"}
        onClick={onClick}
        disabled={props.isNominated}
      >
        Nominate
      </button>
    </div>
  );
};

export default SearchResultComponent;
