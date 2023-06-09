import { Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import qr from "./qr-logo.png";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

function ScanAppointment() {
  const [picture, setPicture] = useState("");
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  return (
    <>ch
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
        <div>
          <h2 className="mb-5 text-center">
            React Photo Capture using Webcam Examle
          </h2>
          <div>
            {picture == "" ? (
              <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                width={400}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            ) : (
              <img src={picture} />
            )}
          </div>
          <div>
            {picture != "" ? (
              // <button
              //   onClick={(e) => {
              //     e.preventDefault();
              //     setPicture();
              //   }}
              //   className="btn btn-primary"
              // >
              //   Retake
              // </button>
              <></>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  capture();
                }}
                className="btn btn-danger"
              >
                Capture
              </button>
            )}
          </div>
        </div>
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
