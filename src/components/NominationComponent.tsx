import { Movie } from "../models/Movie";

interface IProps {
  key: string;
  imdbID: string;
  nomination: Movie;
  onRemoveNominationClick: (imdbID: string) => void;
}

const NominationComponent = (props: IProps) => {
  const onClick = () => {
    props.onRemoveNominationClick(props.imdbID);
  };
  return (
    <div className={"movie-item-container"}>
      <div className={"movie-item-title"}>
        {props.nomination.Title} ({props.nomination.Year})
      </div>
      <button className={"remove-button"} onClick={onClick}>
        Remove
      </button>
    </div>
  );
};

export default NominationComponent;
