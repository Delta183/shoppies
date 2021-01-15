import { findByLabelText } from "@testing-library/react";
import ContentNominatedHeaderComponent from "./ContentNominatedHeaderComponent";
import ContentResultHeaderComponent from "./ContentResultHeaderComponent";

interface IProps {
  key: string;
}

const ContentHeadersComponent = () => {
  const style = {
    display: "flex",
  };
  return (
    <div style={style}>
      <header>
        <ContentResultHeaderComponent />
      </header>
      <header>
        <ContentNominatedHeaderComponent />
      </header>
    </div>
  );
};

export default ContentHeadersComponent;
