import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Currencies, InitialState } from "../../types";
import httpService from "../../services/http.services.ts";

export const requestCurrency = createAsyncThunk("currency/set", async () => {
  try {
    const currencies = await httpService.get(
      "https://v6.exchangerate-api.com/v6/b045ab2d173eabfad1494c2b/latest/USD"
    );
    return currencies.data.conversion_rates;
  } catch (e) {}
});

const setPending = (state: CurrencyState) => {
  state.isLoading = true;
  state.error = null;
};

const setRejected = (state: CurrencyState) => {
  state.isLoading = false;
  state.error = null;
};

type CurrencyState = InitialState<Currencies>;

const initialState: CurrencyState = {
  entity: {},
  isLoading: false,
  error: null
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(requestCurrency.pending, setPending);
    builder.addCase(requestCurrency.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.entity = payload;
    });
    builder.addCase(requestCurrency.rejected, setRejected);
  }
});

export const getCurrencies =
  () => (state: { currencies: { entity: Currencies } }) =>
    state.currencies.entity;

export const { reducer: currenciesReducer } = currenciesSlice;

export default currenciesReducer;
