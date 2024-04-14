import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Favorites } from "./pages/Favorites";
import { MainLayout } from "./layout/MainLayout";
import { Suspense } from "react";
import { Loader } from "./components/common/Loader";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<Loader />}>
          <MainLayout />
        </Suspense>
      }>
        <Route index element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>} />
        <Route path="/favorites" element={
          <Suspense fallback={<Loader />}>
            <Favorites />
          </Suspense>}
        />
        <Route path="*" element={
          <Suspense fallback={<Loader />}>
            <Error />
          </Suspense>
        } />
      </Route>
      <Route path="*" element={
        <Suspense fallback={<Loader />}>
          <Error />
        </Suspense>
      }/>
    </Routes>
  );
};
