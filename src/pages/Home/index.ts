import React from "react";

const Home = React.lazy(() =>
  import("./Home").then(module => ({ default: module.Home }))
);
export { Home };
