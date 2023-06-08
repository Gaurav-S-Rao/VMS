import Container from "@mui/material/Container";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { hostDetails } from "../data/details";
import { useNavigate } from "react-router-dom";

import { useNotification } from "../hooks/useNotification";
import { useDispatch } from "react-redux";
import { setLogin } from "../Store/authSlice";

// import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { displayNotification } = useNotification();

  const checkValidation = ({ email, password }) => {
    if (email === hostDetails.email && password === hostDetails.password) {
      dispatch(setLogin({ userId: 1, userRole: "host" }));
      displayNotification({
        type: "success",
        message: "Loged in as a Host Successfully",
      });
    } else {
      displayNotification({
        type: "error",
        message: "Invalid Credentials",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await checkValidation({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/dashboard?type=host");
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          backgroundColor: "white",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          LogIn
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
