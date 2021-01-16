import { Movie } from "./Movie";

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
      <button onClick={onClick}>Nominate</button>
    </div>
  );
};

export default NominationComponent;
