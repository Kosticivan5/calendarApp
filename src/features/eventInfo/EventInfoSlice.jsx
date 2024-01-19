import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const EventInfoSlice = createSlice({
  name: "eventInfo",
  initialState,
  reducers: {
    openEvent: (state, action) => {
      state.isOpen = true;
    },
  },
});

export const { openEvent } = EventInfoSlice.actions;

export default EventInfoSlice.reducer;
