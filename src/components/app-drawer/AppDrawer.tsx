import { getPathIcon } from "../../theme/getPathIcon";
import { Link } from "react-router-dom";
import { rootStruct } from "../../rootStruct";
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

type AppDrawerProps = {
  onToggle: (newValue: boolean) => void;
  onItemClick: () => void;
} & Omit<DrawerProps, "anchor">;

const AppDrawer = ({ onToggle, onItemClick, ...props }: AppDrawerProps) => {
  const style = {
    // color: "white",
    // a: {
    //   color: "red",
    // },
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
        <Box sx={{ height: "100% " }} role="presentation">
          <List>
            {rootStruct.map(({ id, name, iconName, path }) => (
              <ListItem
                key={id}
                component={Link}
                to={path}
                sx={style}
                onClick={onItemClick}
              >
                <ListItemIcon>{getPathIcon(iconName)}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppDrawer;
