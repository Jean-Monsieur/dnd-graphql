import { PaletteMode } from "@mui/material";
import { amber, deepPurple, grey, indigo, orange } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        primary: indigo,
        secondary: amber,
        text: {
          primary: grey[900],
        },
      }
      : {
        // palette values for dark mode
        primary: indigo,
        secondary: orange,
        background: {
          default: "#303030",
          link: 'red',
          // paper: deepPurple[900],
        },
        text: {
          primary: "#fff",
          secondary: grey[500],
        },
      }),
  },
});
