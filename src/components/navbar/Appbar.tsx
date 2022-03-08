import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomeIcon from "@mui/icons-material/Home";

import {
  AppBar,
  Breadcrumbs,
  Button,
  IconButton,
  PaletteMode,
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

type AppbarProps = {
  currentMode: PaletteMode;
  title: string;
  onMenuToggled: () => void;
  onThemeToggled: () => void;
};

const Appbar = ({
  currentMode,
  title,
  onThemeToggled,
  onMenuToggled,
}: AppbarProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

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
