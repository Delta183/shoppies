import { SearchResult } from "./SearchResult";

interface IProps {
  key: string;
  result: SearchResult;
}

const SearchResultComponent = (props: IProps) => {
  return (
    <div className={"search-result-container"}>
      <div>
        {props.result.Title} ({props.result.Year})
      </div>
      <button>Nominate</button>
    </div>
  );
};

export default SearchResultComponent;
