import { SearchResult } from "./SearchResult";

interface IProps {
  key: string;
  result: SearchResult;
}

const SearchResultComponent = ({ result }: IProps) => {
  return <header>{result.Title}</header>;
};

export default SearchResultComponent;
