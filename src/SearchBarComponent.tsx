interface IProps {
  input: string;
  onChange: (text: string) => void;
}

const SearchBarComponent = ({ input, onChange }: IProps) => {
  const BarStyling = {
    width: "80rem",
    background: "#F2F1F9",
    border: "5px solid black",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={input}
      placeholder={"Search Movies"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBarComponent;
