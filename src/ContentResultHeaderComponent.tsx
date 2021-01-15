interface IProps {
  key: string;
}

const ContentResultHeaderComponent = () => {
  const headerStyling = {
    width: "30rem",
    // The header for the movie search results
    position: "relative" as const,
    left: "80px",
    background: "#F2F3",
    textAlign: "center" as const,
  };
  return <div style={headerStyling}>Movie Results</div>;
};

export default ContentResultHeaderComponent;
