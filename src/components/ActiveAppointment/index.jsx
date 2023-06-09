import {
  Box,
  Container,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ActiveAppointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://sheetdb.io/api/v1/vmdyjsot299jv")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAppointments(data);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <Toolbar>
        <Typography variant="h4" component="div">
          View Active Appointment
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>USER ID</TableCell>
                <TableCell align="right">NAME</TableCell>
                <TableCell align="right">Contact Number</TableCell>
                <TableCell align="right">Purpose Of Visit</TableCell>
                <TableCell align="right">Appointment Date</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {appointments.length === 0 ? (
          <Typography variant="h5" component="div">
            No Active Appointment
          </Typography>
        ) : (
          appointments.map((appointment) => (
            <>
              <TableRow
                key={appointment}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {appointment?.userId}
                </TableCell>
                <TableCell align="right">{appointment.name}</TableCell>
                <TableCell align="right">{appointment.emailId}</TableCell>
                <TableCell align="right">{appointment.number}</TableCell>
                <TableCell align="right">
                  {appointment.purposeOfVisit}
                </TableCell>
                <TableCell align="right">
                  {appointment.appointmentdate}
                </TableCell>
                {/* show a tick icon or wrong based on TRUE or FALSE */}
                <TableCell align="right">
                  {appointment.approvalByHost}
                </TableCell>
              </TableRow>
            </>
          ))
        )}
      </Container>
    </>
  );
}
ActiveAppointment.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ActiveAppointment;
