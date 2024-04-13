import React from "react";
const Container = React.lazy(() =>
  import("./Container").then(module => ({ default: module.Container }))
);
export { Container };
