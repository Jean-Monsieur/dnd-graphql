import "./App.css";
import MonsterPage from "./components/monster";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Container,
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

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [open, setOpen] = React.useState(false);

  const list = () => (
    <Box
      sx={{ width: 250, height: "100% " }}
      role="presentation"
      onClick={() => setOpen(false)}
      onMouseLeave={() => setOpen(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Appbar
        currentMode={theme.palette.mode}
        onThemeToggled={colorMode.toggleColorMode}
        onMenuToggled={() => setOpen(true)}
      />

      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        {list()}
      </Drawer>

      <div style={{ padding: "1rem", width: "100%" }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            TestJM
          </Typography>
        </Box>
        <MonsterPage></MonsterPage>
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
