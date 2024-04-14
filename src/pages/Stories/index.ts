import React from "react";

const Stories = React.lazy(() =>
  import("./Stories").then(module => ({ default: module.Stories }))
);
export { Stories };
