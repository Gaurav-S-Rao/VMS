import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useNavigate } from "react-router-dom";
import { setLogout } from "../../Store/authSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { hostOperations, securtityOperations } from "../../data/details";
import { useEffect, useState } from "react";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#000000",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// eslint-disable-next-line react/prop-types
function DashboardContent() {
  const authState = useSelector((state) => state.auth);
  const [operation, setOperation] = useState([]);
  const [title, setTitle] = useState("Welcome");

  useEffect(() => {
    if (authState.userId === 1) {
      setOperation(hostOperations);
      setTitle("Welcome Host");
    } else if (authState.userId === 2) {
      setOperation(securtityOperations);
      setTitle("Welcome Security");
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(setLogout());
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f0f0f0" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        open={open}
        sx={{ backgroundColor: "#06d6a0" }}
      >
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit" onClick={() => logout()}>
            <Badge color="secondary">
              <LogoutIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ backgroundColor: "black" }}>
        <List component="nav">
          {operation.map((item) => (
            <ListItemButton
              key={item}
              selected={location.pathname.split("/")[2] === item.path}
              sx={{
                color: "white",
                "&.Mui-selected": {
                  backgroundColor: "rgba(136, 136, 140, 0.56)",
                  color: "#fff",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(136, 136, 140, 0.56)",
                  color: "#fff",
                },
                mx: "10px",
                px: "10px",
                borderRadius: "10px",
              }}
              onClick={() => navigate(`/dashboard/${item.path}`)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          {!location.pathname.split("/")[2] && (
            <Typography
              component="h1"
              variant="h1"
              color="inherit"
              noWrap
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "80vh",
                color: "white",
              }}
            >
              {title}
              <Typography component="h2" variant="h4" color="white">
                Follow the left side menu to navigate
              </Typography>
            </Typography>
          )}

          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

export default DashboardContent;
