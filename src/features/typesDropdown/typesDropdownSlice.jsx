import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: "Направление",
  isOpen: false,
};

const typesDropdownSlice = createSlice({
  name: "typesDropdown",
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

export const { toggleDropdown, selectFormat } = typesDropdownSlice.actions;

export default typesDropdownSlice.reducer;
