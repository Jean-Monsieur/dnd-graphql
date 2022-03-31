import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { ThemeMode } from "./theme/theme";
import { getDesignTokens } from "./theme/getDesignTokens";
import { Appbar } from "./components/navbar";

import Router from "./Router";
import AppDrawer from "./components/app-drawer/AppDrawer";
import { drawerWidth } from "./theme/mixins";

import { ColorModeContext } from "./theme/ColorModeContext";
import { BrowserRouter } from "react-router-dom";
import { useDeviceSelectors } from "react-device-detect";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  height: "100%",
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [{ isMobile }] = useDeviceSelectors(window.navigator.userAgent);

  const [open, setOpen] = useState(false);


  const handleItemClicked = useCallback(() => {
    if (isMobile) {
      setOpen(!open);
    }
  }, [isMobile, open]);

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <Appbar
          currentMode={theme.palette.mode}
          onThemeToggled={colorMode.toggleColorMode}
          onMenuToggled={() => setOpen(!open)}
        />
        <AppDrawer
          variant="persistent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open={open}
          onItemClick={handleItemClicked}
          onToggle={(value) => setOpen(value)}
          onClose={() => setOpen(false)}
        />
        <Main open={open}>
          <div style={{ width: "100%" }}>
            <Toolbar />
            <Router />
          </div>
        </Main>
      </Box>
    </BrowserRouter>
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
