import React from "react";
const Error = React.lazy(() =>
  import("./Error").then(module => ({ default: module.Error }))
);
export { Error };
