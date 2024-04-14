import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Conversion, InitialState } from "../../types";

export const setStories = createAsyncThunk("stories/set", async () => {
  const stories = localStorage.getItem("stories");
  return stories ? JSON.parse(stories) : [];
});

export const addStories = createAsyncThunk(
  "stories/add",
  async (payload: Conversion) => {
    return payload;
  }
);

const setPending = (state: StoriesState) => {
  state.isLoading = true;
  state.error = null;
};

const setRejected = (state: StoriesState) => {
  state.isLoading = false;
  state.error = true;
};

const setLocalStorage = (value: Array<Conversion>) => {
  localStorage.setItem("stories", JSON.stringify(value));
};

type StoriesState = InitialState<Conversion[]>;

const initialState: StoriesState = {
  entity: [
    {
      from: {
        name: "USD",
        value: 1000
      },
      to: {
        name: "RUB",
        value: 90000
      },
      date: "14.04.2024, 16:30:44"
    }
  ],
  isLoading: false,
  error: null
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setStories.pending, setPending);
    builder.addCase(setStories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.entity = payload;
      setLocalStorage(payload);
    });
    builder.addCase(setStories.rejected, setRejected);
    builder.addCase(addStories.pending, setPending);
    builder.addCase(addStories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const newState = [...state.entity, payload];
      state.entity = newState;
      setLocalStorage(newState);
    });
    builder.addCase(addStories.rejected, setRejected);
  }
});

export const getStories =
  () => (state: { stories: { entity: Array<Conversion> } }) =>
    state.stories.entity;

export const { reducer: storiesReducer } = storiesSlice;

export default storiesReducer;
