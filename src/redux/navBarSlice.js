import { createSlice } from "@reduxjs/toolkit";
const navbarSlice = createSlice({
  name: "navbar",
  initialState: false,
  reducers: {
    changeShowNavbar: (state) => {
      console.log("test");
      return !state;
    },
  },
});

export const { changeShowNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
