import React from "react";
const Selector = React.lazy(() =>
  import("./Selector").then(module => ({ default: module.Selector }))
);
 
export default Selector;