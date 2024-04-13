import React from "react";

const Favorites = React.lazy(() =>
  import("./Favorites").then(module => ({ default: module.Favorites }))
);
export { Favorites };
