import { AppRouter } from "./AppRouter.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks.ts";
import { requestCurrency } from "./store/common/currency.slicer.ts";
import { setFavorites } from "./store/common/favorites.slicer.ts";
import { setStories } from "./store/common/stories.slicer.ts";

export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestCurrency());
    dispatch(setFavorites());
    dispatch(setStories());
  }, []);
  return <AppRouter />;
}
