import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: "fake name",
  token: "token",
  posts: [],
};

export const authSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setMode, setLogout } = authSlice.actions;
export default authSlice.reducer;
