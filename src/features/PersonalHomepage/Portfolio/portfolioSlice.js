import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    state: "idle",
    projects: [],
  },
  reducers: {
    fetchProjectsLoading: ({ state }) => {
      state = "loading";
    },
    fetchProjectsError: ({ state }) => {
      state = "error";
    },
    fetchProjectsSuccess: (state, { payload: projects }) => {
      state.state = "success";
      state.projects = projects;
    },
    fetchProjects: () => {},
  },
});

const selectPortfolio = (state) => state;

export const selectPortfolioState = (state) => selectPortfolio(state).state;

export const {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsLoading,
  fetchProjectsSuccess,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
