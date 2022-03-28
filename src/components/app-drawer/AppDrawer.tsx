import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { Link } from "react-router-dom";
import { RootStruct } from "../../rootStruct";
import { getPathIcon } from "../../theme/getPathIcon";

type AppDrawerProps = { onToggle: (newValue: boolean) => void } & Omit<
  DrawerProps,
  "anchor"
>;

const AppDrawer = ({ onToggle, ...props }: AppDrawerProps) => {
  const style = {
    "&:hover": {
      color: "inherit",
      textDecoration: "none",
    },
    "&:visited": {
      color: "inherit",
      textDecoration: "none",
    },
    "&:active": {
      color: "inherit",
      textDecoration: "none",
    },
  };

  return (
    <>
      <Drawer anchor={"left"} {...props}>
        <Toolbar />
        <Box sx={{ width: 250, height: "100% " }} role="presentation">
          <List>
            {RootStruct.map(({ id, name, iconName, path }) => (
              <ListItem key={id} component={Link} to={path} sx={style}>
                <ListItemIcon>{getPathIcon(iconName)}</ListItemIcon>
                <ListItemText color="white" primary={name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppDrawer;
