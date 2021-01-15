import { Movie } from "./Movie";

interface IProps {
  key: string;
  imdbID: string;
  result: Movie;
  onResultClick: (imdbID: string) => void;
}

const SearchResultComponent = (props: IProps) => {
  const onClick = () => {
    props.onResultClick(props.imdbID);
  };
  return (
    <div className={"search-result-container"}>
      <div>
        {props.result.Title} ({props.result.Year})
      </div>
      <button onClick={onClick}>Nominate</button>
    </div>
  );
};

export default SearchResultComponent;
