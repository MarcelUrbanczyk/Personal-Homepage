import { createSlice } from "@reduxjs/toolkit";
import {
  getThemeStateFromLocalStorage,
  saveThemeState,
} from "./saveThemeAtLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: getThemeStateFromLocalStorage(),
  },
  reducers: {
    switchTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      saveThemeState(state.theme);
    },
  },
});

const selectTheme = (state) => state.theme;
export const selectThemeState = (state) => selectTheme(state).theme;

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
