import SearchBarComponent from "./SearchBarComponent";

interface IProps {
  input: string;
  onChange: (text: string) => void;
}

const SearchContainerComponent = ({ input, onChange }: IProps) => {
  return (
    <div className="App-header">
      <SearchBarComponent input={input} onChange={onChange} />
    </div>
  );
};

export default SearchContainerComponent;
