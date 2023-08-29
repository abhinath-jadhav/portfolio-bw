import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "darkTheme",
  initialState: true,
  reducers: {
    changeTheme: (state) => {
      console.log("Theme change");
      return !state;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
