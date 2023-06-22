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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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

  // const deleteEntry = async ({userId}) => {
  //   await fetch(`https://sheetdb.io/api/v1/58f61be4dda40/userId/${userId}`, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ color: "white" }}>
          View Active Appointment
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
        }}
      >
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, backgroundColor: "black" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>USER ID</TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  NAME
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  E-MAIL
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Contact Number
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Purpose Of Visit
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Appointment Date
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Approval
                </TableCell>
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
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    maxWidth: "150px",
                  }}
                >
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
                <TableCell align="right">
                  <DeleteForeverIcon
                    sx={{
                      color: "red",
                    }}
                    // onClick={() => deleteEntry(appointment.userId)}
                  />
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
