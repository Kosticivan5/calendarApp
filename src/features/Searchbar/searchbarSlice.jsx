import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredEvents: [],
};

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    handleSearchBarEvents: (state, action) => {
      state.filteredEvents = action.payload;
    },
  },
});

export const { handleSearchBarEvents } = searchBarSlice.actions;

export default searchBarSlice.reducer;
