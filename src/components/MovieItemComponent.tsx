import { Movie } from "../models/Movie";

interface IProps {
  imdbID: string;
  movie: Movie;
  buttonConfig: {
    disabled: boolean;
    className: string;
    title: string;
    onClick: (imdbID: string) => void;
  };
}

const MovieItemComponent = (props: IProps) => {
  const onClick = () => {
    props.buttonConfig.onClick(props.imdbID);
  };
  return (
    <div className={"movie-item-container"}>
      <img
        className={"movie-item-image"}
        src={props.movie.Poster}
        alt={`Movie poster for ${props.movie.Title} (${props.movie.Year})`}
      />
      <div className={"movie-item-title"}>
        {`${props.movie.Title} (${props.movie.Year})`}
      </div>
      <button
        className={props.buttonConfig.className}
        onClick={onClick}
        disabled={props.buttonConfig.disabled}
      >
        {props.buttonConfig.title}
      </button>
    </div>
  );
};

export default MovieItemComponent;
