import { createSlice } from "@reduxjs/toolkit";
const navbarSlice = createSlice({
  name: "navbar",
  initialState: false,
  reducers: {
    changeShowNavbar: (state) => !state,
  },
});

export const { changeShowNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
