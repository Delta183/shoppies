interface IProps {
  input: string;
  onChange: (text: string) => void;
}

const SearchBarComponent = ({ input, onChange }: IProps) => {
  return (
    <input
      className={"search-bar"}
      value={input}
      placeholder={"Search Movies"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBarComponent;
