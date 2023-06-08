import { Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import qr from "./qr-logo.png";
function ScanAppointment() {
  return (
    <>
      <Toolbar>
        <Typography variant="h4" component="div">
          Scan Appointment to continue
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
        <button className="w-80 h-80 border-black border-10 border-r-10 rounded-lg bg-slate-500">
          <img src={qr} />
        </button>
        <Typography variant="h3">Scan Qr</Typography>
        <br />
        <Typography variant="h5">Status:</Typography>
      </Container>
    </>
  );
}
ScanAppointment.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ScanAppointment;
