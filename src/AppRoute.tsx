import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Favorites } from "./pages/Favorites";
import { MainLayout } from "./layout/MainLayout";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
