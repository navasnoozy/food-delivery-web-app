import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slice/userSlice";
import type { RootState } from "../../store/store";
import AppLink from "../CustomLink";

const User = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    return (
      <Box sx={{ flexGrow: 0 }}>
        <AppLink to={"/signin"} sx={{ color: "white" }}>
          Sign In
        </AppLink>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {" "}
        <AppLink to={"/cart"} sx={{ color: "black" }}>
          <MenuItem>Cart</MenuItem>
        </AppLink>
        <MenuItem onClick={() => dispatch(logoutUser())}>
          <Typography sx={{ textAlign: "center" }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default User;
