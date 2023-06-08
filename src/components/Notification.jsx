import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { useNotification } from "../hooks/useNotification";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const { clearNotification } = useNotification();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    clearNotification();
  };

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={notification.type}
        sx={{ width: "100%" }}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
