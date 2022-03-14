import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomeIcon from "@mui/icons-material/Home";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import {
  Breadcrumbs,
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
import { Link as RouterLink, useLocation } from "react-router-dom";
import Link, { LinkProps } from "@mui/material/Link";
import { PATHS } from "../../rootStruct";
import { getPathIcon } from "../../theme/getPathIcon";
import { drawerWidth } from "../../theme/mixins";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import React from "react";

type AppbarProps = {
  currentMode: PaletteMode;
  username: string;
  onMenuToggled: () => void;
  onThemeToggled: () => void;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Appbar = ({
  currentMode,
  username,
  onThemeToggled,
  onMenuToggled,
}: AppbarProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const { isLoading, isAuthenticated, error, loginWithRedirect, logout } =
    useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { user } = useAuth0<{ name: string }>();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
  }

  const LinkRouter = (props: LinkRouterProps) => (
    <Link {...props} component={RouterLink as any} />
  );

  const breadcrumbNameMap: { [key: string]: string } = {
    [PATHS.MONSTERS]: "Monsters",
  };

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
        <Breadcrumbs aria-label="breadcrumb" maxItems={2} sx={{ flexGrow: 1 }}>
          <LinkRouter variant="h6" underline="hover" color="white" to="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home
          </LinkRouter>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return last ? (
              <Typography variant="h6" color="white" key={to}>
                {getPathIcon(to)} {breadcrumbNameMap[to]}
              </Typography>
            ) : (
              <LinkRouter
                variant="h6"
                underline="hover"
                color="white"
                to={to}
                key={to}
              >
                {breadcrumbNameMap[to]}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
        {isAuthenticated ? (
          <div>
            <IconButton
              size="small"
              // size="large"
              // aria-label="account of current user"
              // aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <>
                <AccountCircle /> {user?.name ?? "bruh"}
              </>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Button onClick={loginWithRedirect} color="inherit">
            Login
          </Button>
        )}
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
