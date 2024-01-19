import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./features/calendar/calendarSlice";
import eventInfoReducer from "./features/eventInfo/EventInfoSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    eventInfo: eventInfoReducer,
  },
});
