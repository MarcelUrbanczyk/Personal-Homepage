const colorCollection = {
  Anakiwa: "#8cc2ff",
  ScienceBlue: "#0366D6",
  DodgerBlue: "#2188FF",
  TransparentLightBlue: "#0366d633",
  TransparentDarkBlue: "#0366d680",
  White: "#FFF",
  WhiteLilac: "#FBFBFE",
  SlateGray: "#6E7E91",
  TransparentGray: "#14462033",
  TransparentDarkGray: "#363636b8",
  TransparentLightGray: "#d1d5da4d",
  Mercury: "#E5E5E5",
  MineShaft: "#252525",
  TransparentBlack: "#363636b8",
};

const common = {
  boxshadow:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
};

export const lightTheme = {
  ...common,
  colors: {
    background: {
      siteBackground: colorCollection.WhiteLilac,
      boxBackground: colorCollection.White,
    },
    text: {
      primaryBlue: colorCollection.ScienceBlue,
      primaryText: colorCollection.MineShaft,
      secondaryText: colorCollection.SlateGray,
    },
    border: {
      primaryBorder: colorCollection.TransparentLightGray,
      blueBorder: colorCollection.TransparentLightBlue,
    },
    button: {
      background: colorCollection.ScienceBlue,
      text: colorCollection.White,
      border: colorCollection.TransparentLightGray,
      focusBoxShadow:
        "-2px -2px 0px 0px #8CC2FF, 2px 2px 0px 0px #8CC2FF, -2px 2px 0px 0px #8CC2FF, 2px -2px 0px 0px #8CC2FF",
      activeBoxShadow: "0px 2px 0px 0px rgba(20, 70, 32, 0.20) inset",
    },
    divider: colorCollection.TransparentLightGray,
  },
};

export const darkTheme = {
  ...common,
  colors: {
    background: {
      siteBackground: colorCollection.MineShaft,
      boxBackground: colorCollection.TransparentBlack,
    },
    text: {
      primaryBlue: colorCollection.DodgerBlue,
      primaryText: colorCollection.White,
      secondaryText: colorCollection.White,
    },
    border: {
      primaryBorder: colorCollection.TransparentLightGray,
      blueBorder: colorCollection.DodgerBlue,
    },
    button: {
      background: colorCollection.DodgerBlue,
      text: colorCollection.White,
      border: colorCollection.TransparentLightGray,
      focusBoxShadow:
        "-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE",
      activeBoxShadow: "0px 2px 0px 0px rgba(20, 70, 32, 0.20) inset",
    },
    divider: colorCollection.TransparentLightGray,
  },
};
