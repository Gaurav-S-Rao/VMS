import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

// import useAuth from "../hooks/useAuth";
// import { useLogoutMutation } from "./../store/api/authApiSlice";
import { IconButton, Menu, MenuItem } from "@mui/material";

const listofmenuitems = [
  { name: "Create Appointment", path: "createappointment" },
  { name: "Active Appointment", path: "activeappointment" },
];

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  
  //   const [logout] = useLogoutMutation();
  //   const auth = useAuth();
  const auth = false;

  //   const handleLogout = async () => {
  //     await logout();
  //   };

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleProfile = () => navigate("/dashboard/myposts");
  const handleHome = () => navigate("/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      {auth && (
        <AppBar
          position="static"
          sx={{
            width: "100%",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="h2"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={handleHome}
            >
              Visitor Management System
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 1 },
              }}
            >
              <Button
                color="inherit"
                sx={{ mr: 1 }}
                onClick={() => navigate("/creators")}
              >
                Check All appointments
              </Button>
              <Button color="inherit" sx={{ mr: 1 }}>
                Logout
              </Button>

              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
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
                  <MenuItem onClick={handleProfile}>Dashboard</MenuItem>
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                </Menu>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
}
