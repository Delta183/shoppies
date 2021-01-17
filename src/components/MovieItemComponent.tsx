import { Movie } from "../models/Movie";
import placeholderPoster from "../resources/placeholder_poster.png";

const INVALID_MOVIE_POSTER_TEXT = "N/A";

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
  const hasPoster = props.movie.Poster !== INVALID_MOVIE_POSTER_TEXT;
  return (
    <div className={"movie-item-container"}>
      <img
        className={
          hasPoster ? "movie-item-image" : "movie-item-placeholder-image"
        }
        src={hasPoster ? props.movie.Poster : placeholderPoster}
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
