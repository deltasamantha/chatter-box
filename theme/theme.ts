import {extendTheme, IButtonProps} from "native-base";

export const chatterboxTheme = extendTheme({
  colors: {
    tag: {
      on: "#CCFBF1",
      off: "#6D9294",
    },
    chatterbox: {
      100: "#f0eff8",
      200: "#e0def1",
      300: "#c1bee4",
      400: "#a29dd6",
      500: "#837dc9",
      600: "#645cbb",
      700: "#504a96",
      800: "#3c3770",
      900: "#28254b",
    },
    chatterboxMuted: {
      100: "#B7BFC3",
      200: "#909EA6",
      300: "#667F8C",
      400: "#475D69",
      500: "#3C5563",
      600: "#2D4754",
      700: "#1B2F3A",
    },
    chatterboxAccent: {
      100: "#ffd1a1",
      200: "#ffb971",
      300: "#ffa242",
      400: "#ff8b13",
      500: "#e67d11",
      600: "#b3610d",
      700: "#80460a",
    },
    // danger: {
    //   // TODO: Change shades when needed to
    //   100: "#FB7185",
    //   200: "#FB7185",
    //   300: "#FB7185",
    //   400: "#FB7185",
    //   500: "#FB7185",
    //   600: "#FB7185",
    //   700: "#FB7185",
    //   800: "#FB7185",
    //   900: "#FB7185",
    // },
    whiteBtn: {
      500: "#ffffff",
      600: "#ffffff",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});


type CustomThemeType = typeof chatterboxTheme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
