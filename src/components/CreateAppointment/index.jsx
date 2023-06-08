import { Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CreateAppointment() {
  return (
    <>
      <Toolbar>
        <Typography variant="h4" component="div">
          Creation of Appointment
        </Typography>
      </Toolbar>
      <Container
        sx={{
          backgroundColor: "#e6f2ff",
          borderRadius: "10px",
          height: "70vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          m: "10px",
        }}
      >
        <h1>Create Appointment</h1>
      </Container>
    </>
  );
}
CreateAppointment.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default CreateAppointment;
