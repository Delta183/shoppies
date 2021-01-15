import { Movie } from "./Movie";

interface IProps {
  key: string;
  imdbID: string;
  nomination: Movie;
}

const NominationComponent = (props: IProps) => {
  return (
    <div className={"nomination-container"}>
      <div>
        {props.nomination.Title} ({props.nomination.Year})
      </div>
    </div>
  );
};

export default NominationComponent;
