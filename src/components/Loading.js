import React from "react";
import { Container, LinearProgress } from "@material-ui/core";

function PageLoader(props) {
  const { style, children, height, ...otherProps } = props;

  return (
    <Container
      style={{
        height: height || "100vh",
        textAlign: "center",
        padding: height || "10vh",
      }}
    >
      {!props.children && <LinearProgress />}

      {props.children && <>{props.children}</>}
    </Container>
  );
}

export default PageLoader;
