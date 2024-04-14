import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./common/currency.slicer.ts";
import favoritesReducer from "./common/favorites.slicer.ts";
import isDev from "../utils/isDev.ts";

const rootReducer = combineReducers({
  currencies: currencyReducer,
  favorites: favoritesReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: isDev()
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
