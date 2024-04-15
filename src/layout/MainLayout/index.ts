import React from "react";
const MainLayout = React.lazy(() =>
  import("./MainLayout").then(module => ({ default: module.MainLayout }))
);
export { MainLayout };
