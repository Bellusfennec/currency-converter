import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Currency, InitialState } from "../../types";

export const setFavorites = createAsyncThunk("favorites/set", async () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
});

export const addFavorites = createAsyncThunk(
  "favorites/add",
  async (payload: Currency) => {
    return payload;
  }
);

export const deleteFavorites = createAsyncThunk(
  "favorites/delete",
  async (payload: Currency) => {
    return payload;
  }
);

const setPending = (state: CurrencyState) => {
  state.isLoading = true;
  state.error = null;
};

const setRejected = (state: CurrencyState) => {
  state.isLoading = false;
  state.error = true;
};

const setLocalStorage = (value: Array<Currency>) => {
  localStorage.setItem("favorites", JSON.stringify(value));
};

type CurrencyState = InitialState<Currency[]>;

const initialState: CurrencyState = {
  entity: [],
  isLoading: false,
  error: null
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFavorites.pending, setPending);
    builder.addCase(setFavorites.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.entity = payload;
      setLocalStorage(payload);
    });
    builder.addCase(setFavorites.rejected, setRejected);
    builder.addCase(addFavorites.pending, setPending);
    builder.addCase(addFavorites.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const newState = [...state.entity, payload];
      state.entity = newState;
      setLocalStorage(newState);
    });
    builder.addCase(addFavorites.rejected, setRejected);
    builder.addCase(deleteFavorites.pending, setPending);
    builder.addCase(deleteFavorites.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const newState = [...state.entity].filter(
        currency => currency.name !== payload.name
      );
      state.entity = newState;
      setLocalStorage(newState);
    });
    builder.addCase(deleteFavorites.rejected, setRejected);
  }
});

export const getFavorites =
  () => (state: { favorites: { entity: Array<Currency> } }) =>
    state.favorites.entity;

export const { reducer: favoritesReducer } = favoritesSlice;

export default favoritesReducer;
