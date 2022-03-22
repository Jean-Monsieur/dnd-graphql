import { IconButton } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import React from "react";

type UserMenuProps = {
  onLogoutClicked: () => void;
};
const UserMenu = ({ onLogoutClicked }: UserMenuProps) => {
  const { user } = useAuth0<{ name: string }>();

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
      <IconButton
        aria-controls={open ? "menu-appbar" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        aria-label="account of current user"
        color="inherit"
        id="basic-button"
        onClick={handleMenu}
        size="small"
      >
        <>
          <AccountCircle /> {user?.name ?? "bruh"}
        </>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={onLogoutClicked}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
