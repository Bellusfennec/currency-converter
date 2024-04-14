import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Currency, InitialState } from "../../types";
import httpService from "../../services/http.services.ts";

export const requestCurrency = createAsyncThunk("currency/set", async () => {
  const currencies = await httpService.get(
    "https://v6.exchangerate-api.com/v6/b045ab2d173eabfad1494c2b/latest/USD"
  );
  const responce = currencies.data.conversion_rates;
  const massCurrencies = [];
  for (const currency in responce) {
    console.log(currency);
    massCurrencies.push({ name: currency, value: responce[currency] });
  }
  return massCurrencies;
});

const setPending = (state: CurrencyState) => {
  state.isLoading = true;
  state.error = null;
};

const setRejected = (state: CurrencyState) => {
  state.isLoading = false;
  state.error = true;
};

type CurrencyState = InitialState<Array<Currency>>;

const initialState: CurrencyState = {
  entity: [],
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
  () => (state: { currencies: { entity: Array<Currency> } }) =>
    state.currencies.entity;

export const { reducer: currenciesReducer } = currenciesSlice;

export default currenciesReducer;
