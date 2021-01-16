import SearchBarComponent from "./SearchBarComponent";

interface IProps {
  input: string;
  onChange: (text: string) => void;
}

const SearchContainerComponent = ({ input, onChange }: IProps) => {
  return (
    <div className={"search-container"}>
      <div className={"search-title-label"}>Find a movie to nominate: </div>
      <SearchBarComponent input={input} onChange={onChange} />
    </div>
  );
};

export default SearchContainerComponent;
