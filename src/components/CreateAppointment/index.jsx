import { Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

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
        <div className="hero1-wrap flex flex-col gap-10 ">
          <div className="left-container flex flex-col justify-center items-center gap-5">
            <div className="items-center">
              {" "}
              Name:{" "}
              <TextField
                sx={{
                  m: 1,
                }}
                id="outlined-basic"
                label="enter name"
                variant="outlined"
              />{" "}
            </div>
            <div className="items-center">
              {" "}
              Email:{" "}
              <TextField
                sx={{
                  m: 1,
                }}
                id="outlined-basic"
                label="enter email"
                variant="outlined"
              />
            </div>
            <div className="items-center">
              {" "}
              Phone:{" "}
              <TextField
                sx={{
                  m: 1,
                }}
                id="outlined-basic"
                label="enter phone no."
                variant="outlined"
              />
            </div>
            <div className="items-center">
              {" "}
              Purpose:{" "}
              <TextField
                sx={{
                  m: 1,
                }}
                id="outlined-basic"
                label="enter purpose of visit"
                variant="outlined"
              />
            </div>
            <div className="items-center">
              {" "}
              Date:{" "}
              <TextField
                sx={{
                  m: 1,
                }}
                id="outlined-basic"
                label="enter date of visit"
                variant="outlined"
              />
            </div>
          </div>
          <Button variant="contained">Submit</Button>
        </div>
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
