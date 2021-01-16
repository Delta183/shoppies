import { Movie } from "./Movie";

interface IProps {
  key: string;
  imdbID: string;
  result: Movie;
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
      <button onClick={onClick}>Nominate</button>
    </div>
  );
};

export default SearchResultComponent;
