import { Box, Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import qr from "./qr-logo.png";
import Webcam from "react-webcam";
import { useCallback, useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

function ScanAppointment() {
  const [picture, setPicture] = useState("");
  const webcamRef = useRef(null);
  const [scanResult, setScanResult] = useState(null);
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      ch
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
        <div id="reader"></div>
        <Typography
        >
          USER ID IS
          {scanResult && <Box>{scanResult}</Box>}</Typography>
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
