export type themeState = "dark" | "light";

export interface themeProps {
  theme: themeState;
  setTheme: (theme: themeState) => void;
}
