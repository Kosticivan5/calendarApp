import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registred: 0,
  for_type: 0,
  starting: 0,
  lead_academy: 0,
  lead_friday: 0,
  learn_own: 0,
  digital_lit: 0,
  finance_lit: 0,
};

const checkboxSlice = createSlice({
  name: "checkboxes",
  initialState,
  reducers: {
    toggleCheckbox: (state, action) => {
      const { checkboxName } = action.payload;
      state[action.payload] = state[action.payload] === 1 ? 0 : 1;
    },
  },
});

export const { toggleCheckbox } = checkboxSlice.actions;
export const selectCheckboxes = (state) => state.checkboxes;
export default checkboxSlice.reducer;
