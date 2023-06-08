import { createSlice } from "@reduxjs/toolkit";

// type of alert
// error, warning, info, success
export const notificationInitialState = {
  open: false,
  type: "info",
  message: "",
  timeout: 5000,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState: notificationInitialState,
  reducers: {
    addNotification: (state, action) => ({
      ...notificationInitialState,
      ...action.payload,
      open: true,
    }),
    clearNotification: (state) => ({
      ...state,
      open: false,
    }),
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
