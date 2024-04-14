import { AppRouter } from "./AppRouter.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks.ts";
import { requestCurrency } from "./store/common/currency.slicer.ts";

export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestCurrency());
  }, []);
  return <AppRouter />;
}
