import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    state: "idle",
  },
  reducers: {
    setStateLoading: ({ state }) => {
      state = "loading";
    },
    setStateError: ({ state }) => {
      state = "error";
    },
    setStateSuccess: ({ state }) => {
      state = "success";
    },
  },
});

const selectPortfolio = (state) => state;

export const selectPortfolioState = (state) => selectPortfolio(state).state;

export const { setStateError, setStateLoading, setStateSuccess } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
