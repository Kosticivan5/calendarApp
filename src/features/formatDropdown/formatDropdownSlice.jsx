import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: "Формат",
  isOpen: false,
};

const FormatDropdownSlice = createSlice({
  name: "formatDropdown",
  initialState,
  reducers: {
    toggleDropdown: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    selectFormat: (state, action) => {
      state.info = action.payload;
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleDropdown, selectFormat } = FormatDropdownSlice.actions;

export default FormatDropdownSlice.reducer;
