import { createSlice } from "@reduxjs/toolkit";

export const authInitialState = {
  userId: null,
  userRole: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setLogin: (state, action) => ({
      ...authInitialState,
      ...action.payload,
    }),
    setLogout: () => ({
      ...authInitialState,
    }),
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;