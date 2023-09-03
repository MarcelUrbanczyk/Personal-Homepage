import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isThemeDark: false,
  },
  reducers: {
    switchTheme: (state) => {
      state.isThemeDark = !state.isThemeDark;
    },
  },
});

const selectTheme = (state) => state.theme;
export const selectIsThemeDark = (state) => selectTheme(state).isThemeDark;

const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
