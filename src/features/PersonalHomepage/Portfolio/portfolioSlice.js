import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    state: "idle",
    projects: [],
  },
  reducers: {
    fetchProjectsLoading: (state) => {
      state.state = "loading";
    },
    fetchProjectsError: (state) => {
      state.state = "error";
    },
    fetchProjectsSuccess: (state, { payload: projects }) => {
      state.state = "success";
      state.projects = projects;
    },
    fetchProjects: () => {},
  },
});

const selectPortfolio = (state) => state.portfolio;

export const selectLoadingState = (state) => selectPortfolio(state).state;
export const selectProjects = (state) => selectPortfolio(state).projects;

export const {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsLoading,
  fetchProjectsSuccess,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
