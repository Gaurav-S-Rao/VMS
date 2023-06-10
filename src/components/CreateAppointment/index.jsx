import { Box, Container, Toolbar, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import dayjs from "dayjs";
import { useNotification } from "../../hooks/useNotification";
import emailjs from "@emailjs/browser";
import QRCode from "react-qr-code";

function CreateAppointment() {
  const [appointmentdate, setAppointmentdate] = useState(dayjs());
  const [loggedIn, setLoggedIn] = useState(0);
  const { displayNotification } = useNotification();
  const userIdHere = uuidv4();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const prepareData = {
      userId: userIdHere,
      name: data.get("name"),
      emailId: data.get("email"),
      number: data.get("number"),
      purposeOfVisit: data.get("purposeOfVisit"),
      appointmentdate: dayjs(appointmentdate).format("DD/MM/YYYY HH:mm:ss"),
      approvalByHost: "FALSE",
    };

    console.log(prepareData);

    await fetch("https://sheetdb.io/api/v1/vmdyjsot299jv", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [prepareData],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoggedIn(data?.created);
      });

    emailjs.send(
      "service_uwbg1rs",
      "template_lzm9exa",
      {
        email: data.get("email").toString(),
      },
      "4pCfYAtmm9ajgBNI3"
    );
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    displayNotification({
      type: "info",
      message: "Successfully Created Appointment",
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        {loggedIn === 0 ? (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, display: "flex", flexDirection: "column" }}
          >
            <TextField
              margin="normal"
              required
              id="name"
              label="User Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              name="number"
              label="Contact Number"
              type="number"
              id="number"
            />
            <TextField
              margin="normal"
              required
              id="purposeOfVisit"
              label="Purpose of Visit"
              name="purposeOfVisit"
              autoComplete="purposeOfVisit"
              autoFocus
            />

            <DateTimePicker
              label="Set Appointment"
              value={appointmentdate}
              onChange={(newValue) => setAppointmentdate(newValue)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Appointment
            </Button>
          </Box>
        ) : (
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 256,
              width: "100%",
            }}
          >
            <Typography
              variant="primary"
              sx={{
                fontSize: "50px",
              }}
            >
              Qr Code here
            </Typography>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={userIdHere}
              viewBox={`0 0 256 256`}
            />
          </div>
        )}
      </Container>
    </LocalizationProvider>
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
