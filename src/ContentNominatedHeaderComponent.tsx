interface IProps {
  key: string;
}

const ContentNominatedHeaderComponent = () => {
  const headerStyling = {
    width: "30rem",
    // The header for the movie search results
    position: "relative" as const,
    left: "800px",
    background: "#F2F3",
    textAlign: "center" as const,
  };
  return <div style={headerStyling}>Nominated</div>;
};

export default ContentNominatedHeaderComponent;
