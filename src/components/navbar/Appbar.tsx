import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import {
  Button,
  IconButton,
  PaletteMode,
  styled,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { drawerWidth } from "../../theme/mixins";
import { useAuth0 } from "@auth0/auth0-react";
import { UserMenu } from "./user-menu";
import ToggleThemeButton from "./ToggleThemeButton";
import DynamicBreadcrumbs from "./breadcrumbs/DynamicBreadcrumbs";

type AppbarProps = {
  currentMode: PaletteMode;
  onMenuToggled: () => void;
  onThemeToggled: () => void;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Appbar = ({
  currentMode,
  onThemeToggled,
  onMenuToggled,
}: AppbarProps) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuToggled}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <DynamicBreadcrumbs />
        {isAuthenticated ? (
          <UserMenu
            onLogoutClicked={() => logout({ returnTo: window.location.origin })}
          />
        ) : (
          <Button onClick={loginWithRedirect} color="inherit">
            Login
          </Button>
        )}
        <ToggleThemeButton
          currentMode={currentMode}
          onThemeToggled={onThemeToggled}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
