import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submitted: false,
  isHidden: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    isSubmitted: (state, action) => {
      state.submitted = action.payload;
    },
    hideEvents: (state, action) => {
      state.isHidden = action.payload;
    },
  },
});

export const { isSubmitted, hideEvents } = sidebarSlice.actions;
export default sidebarSlice.reducer;
