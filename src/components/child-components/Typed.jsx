import React from "react";
import Typed from "react-typed";

class TypingComponent extends React.Component {
  render() {
    return (
      <Typed
        strings={[
          "Java",
          "Javascript",
          "Typescript",
          "Springboot",
          "React",
          "NextJS",
          "Redux",
          "Kafka",
          "Docker",
          "MongoDB",
          "MS SQL Server",
        ]}
        typeSpeed={120}
        backSpeed={150}
        loop
      />
    );
  }
}

export default TypingComponent;
