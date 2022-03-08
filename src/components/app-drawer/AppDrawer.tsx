import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
        <Box
          sx={{ width: 250, height: "100% " }}
          role="presentation"
          onClick={() => onToggle(false)}
          onMouseLeave={() => onToggle(false)}
        >
          <List>
            {RootStruct.map(({ id, name, iconName, path }) => (
              <ListItem component={Link} to={path} key={id} sx={style}>
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
