export const saveThemeState = (themeState) =>
  localStorage.setItem("themeState", JSON.stringify(themeState));

export const getThemeStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("themeState")) || "light";
