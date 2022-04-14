import {
  amber,
  grey,
  indigo,
  orange
  } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

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
        link: 'red',
        background: {
          default: "#303030",
          link: "red",
        },
        text: {
          primary: "#fff",
          secondary: grey[500],
          link: 'red'
        },
      }),
  },
});
