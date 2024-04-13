import React from "react";
const Title = React.lazy(() =>
  import("./Title").then(module => ({ default: module.Title }))
);
export { Title };
