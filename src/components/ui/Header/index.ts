import React from "react";
const Header = React.lazy(() =>
  import("./Header").then(module => ({ default: module.Header }))
);
export { Header };
