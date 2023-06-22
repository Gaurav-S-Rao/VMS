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
      <div>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ color: "white" }}>
            Creation of Appointment
          </Typography>
        </Toolbar>
        <Container
          sx={{
            backgroundColor: "rgba(136, 136, 140, 0.56)",
            borderRadius: "10px",
            height: "70vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: "10px",
            gap: "5px",
          }}
        >
          {loggedIn === 0 ? (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography sx={{ fontSize: "20px", textDecoration: "bold" }}>
                  Name:
                </Typography>
                <TextField
                  margin="normal"
                  required
                  id="name"
                  label="Visitor Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Container>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography sx={{ fontSize: "20px", textDecoration: "bold" }}>
                  Email:
                </Typography>
                <TextField
                  margin="normal"
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Container>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography sx={{ fontSize: "20px", textDecoration: "bold" }}>
                  Phone:
                </Typography>
                <TextField
                  margin="normal"
                  required
                  name="number"
                  label="Contact Number"
                  type="number"
                  id="number"
                />
              </Container>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography sx={{ fontSize: "20px", textDecoration: "bold" }}>
                  Purpose:
                </Typography>
                <TextField
                  margin="normal"
                  required
                  id="purposeOfVisit"
                  label="Purpose of Visit"
                  name="purposeOfVisit"
                  autoComplete="purposeOfVisit"
                  autoFocus
                />
              </Container>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography sx={{ fontSize: "20px", textDecoration: "bold" }}>
                  Date:
                </Typography>

                <DateTimePicker
                  label="Set Appointment"
                  value={appointmentdate}
                  onChange={(newValue) => setAppointmentdate(newValue)}
                />
              </Container>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2, backgroundColor: "#06d6a0" }}
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
      </div>
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
