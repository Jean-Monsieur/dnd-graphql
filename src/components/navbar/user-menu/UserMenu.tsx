import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Settings from '@mui/icons-material/Settings';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";


type UserMenuProps = {
  onLogoutClicked: () => void;
};
const UserMenu = ({ onLogoutClicked }: UserMenuProps) => {
  const { user } = useAuth0<{ name: string; picture: string }>();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleMenu}
          size="small"
          sx={{ ml: 2 }}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? "menu-appbar" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} src={user?.picture} />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Avatar sx={{ width: 32, height: 32 }} src={user?.picture} />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Avatar sx={{ width: 32, height: 32 }} src={user?.picture} />
          </ListItemIcon>
          My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>{" "}
          Settings
        </MenuItem>
        <MenuItem onClick={onLogoutClicked}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
