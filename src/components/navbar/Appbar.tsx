import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  AppBar,
  Button,
  IconButton,
  PaletteMode,
  styled,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeMode } from "../../theme/theme";

type AppbarProps = {
  currentMode: PaletteMode;
  onMenuToggled: () => void;
  onThemeToggled: () => void;
};

const Appbar = ({
  currentMode,
  onThemeToggled,
  onMenuToggled,
}: AppbarProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuToggled}
          edge="start"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton sx={{ ml: 1 }} onClick={onThemeToggled} color="secondary">
          {currentMode === ThemeMode.DARK ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
