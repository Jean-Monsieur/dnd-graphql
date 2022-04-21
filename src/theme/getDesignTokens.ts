import { amber, grey, indigo, orange } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

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
          primary: orange,
          secondary: amber,
        }),
  },
});
