import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

function HomePage() {
  //   const navigate = useNavigate();

  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");
  let title = "Visitor Management System";
//   let subtitle = ["Host", "Visitor", "Security"];

  return (
    <Container>
      <Box
        sx={{
          flex: 1,
          height: "70vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          my: 6,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "4xl", sm: "5xl", md: "6xl" },
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "3xl", sm: "4xl", md: "5xl" },
            fontWeight: 600,
          }}
        >
          Login Here:
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            sx={{
              m: 2,
              fontSize: "lg",
              color: "gray.500",
              maxWidth: "54ch",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              "&:hover": {
                color: "primary.500",
              },
            }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
