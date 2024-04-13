import React from "react";
const InputField = React.lazy(() =>
  import("./InputField").then(module => ({ default: module.InputField }))
);
export { InputField };
