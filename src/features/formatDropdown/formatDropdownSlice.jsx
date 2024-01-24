import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: "Формат",
  isOpen: false,
  value: "",
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
      state.value = action.payload;
    },
  },
});

export const { toggleDropdown, selectFormat } = FormatDropdownSlice.actions;

export default FormatDropdownSlice.reducer;
