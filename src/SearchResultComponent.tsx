import { SearchResult } from "./SearchResult";

interface IProps {
  key: string;
  imdbID: string;
  result: SearchResult;
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
