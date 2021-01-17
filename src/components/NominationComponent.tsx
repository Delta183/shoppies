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
    <div className={"nomination-container"}>
      <div>
        {props.nomination.Title} ({props.nomination.Year})
      </div>
      <div className={"movie-button"}>
        <button onClick={onClick}>Remove</button>
      </div>
    </div>
  );
};

export default NominationComponent;
