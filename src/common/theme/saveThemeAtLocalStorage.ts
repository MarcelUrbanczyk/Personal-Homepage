import { themeState } from "./type";

export const saveThemeState = (themeState: themeState) =>
  localStorage.setItem("themeState", JSON.stringify(themeState));

export const getThemeStateFromLocalStorage = (): themeState => {
  const storedThemeState = localStorage.getItem("themeState");
  return storedThemeState ? JSON.parse(storedThemeState) : "light";
};
