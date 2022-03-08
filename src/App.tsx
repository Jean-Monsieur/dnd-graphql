import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { ThemeMode } from "./theme/theme";
import { getDesignTokens } from "./theme/getDesignTokens";
import { Appbar } from "./components/navbar";

import Router from "./Router";
import AppDrawer from "./components/app-drawer/AppDrawer";
import { useLocation } from "react-router-dom";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [open, setOpen] = React.useState(false);

  const location = useLocation();

  return (
    <>
      <Appbar
        currentMode={theme.palette.mode}
        title={location.pathname}
        onThemeToggled={colorMode.toggleColorMode}
        onMenuToggled={() => setOpen(true)}
      />
      <AppDrawer
        open={open}
        onToggle={(value) => setOpen(value)}
        onClose={() => setOpen(false)}
      />
      <div style={{ padding: "1rem", width: "100%" }}>
        <Router />
      </div>
    </>
  );
}
export default function ToggleColorMode() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<ThemeMode>(
    prefersDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <App />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
