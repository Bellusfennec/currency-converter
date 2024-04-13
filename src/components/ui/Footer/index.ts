import React from "react";
const Footer = React.lazy(() =>
  import("./Footer").then(module => ({ default: module.Footer }))
);
export { Footer };
