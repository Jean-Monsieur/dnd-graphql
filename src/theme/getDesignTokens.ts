import { PaletteMode } from "@mui/material";
import { deepPurple, grey, indigo, orange } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: indigo,
          secondary: orange,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepPurple,
          secondary: orange,
          background: {
            default: "#303030",
            paper: deepPurple[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
