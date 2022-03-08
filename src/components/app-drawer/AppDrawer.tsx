import { StarBorder } from "@mui/icons-material";
import {
  Box,
  Collapse,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer anchor={"left"} {...props}>
        <Toolbar />
        <Box sx={{ width: 250, height: "100% " }} role="presentation">
          <List>
            {RootStruct.map(({ id, name, iconName, path, subItems }) => {
              if (subItems.length > 0) {
                return (
                  <>
                    <ListItemButton key={id} sx={style} onClick={handleClick}>
                      <ListItemIcon>{getPathIcon(iconName)}</ListItemIcon>
                      <ListItemText color="white" primary={name} />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {subItems.map((s) => (
                          <ListItem
                            component={Link}
                            to={s.path}
                            key={s.id}
                            sx={{ pl: 4, ...style }}
                          >
                            <ListItemIcon>
                              {getPathIcon(s.iconName)}
                            </ListItemIcon>
                            <ListItemText color="white" primary={s.name} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                );
              } else {
                return (
                  <ListItem component={Link} to={path} key={id} sx={style}>
                    <ListItemIcon>{getPathIcon(iconName)}</ListItemIcon>
                    <ListItemText color="white" primary={name} />
                  </ListItem>
                );
              }
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default AppDrawer;
