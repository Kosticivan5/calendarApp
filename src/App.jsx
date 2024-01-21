import { useEffect, useMemo } from "react";
import {
  getCalendarEvents,
  handleCurrentMonth,
  handleEvents,
} from "./features/calendar/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";
import CalendarDKO from "./pages/CalendarDKO";
import CalendarCORP from "./pages/CalendarCORP";
import CalendarRETAIL from "./pages/CalendarRETAIL";
import CalendarDRPZ from "./pages/CalendarDRPZ";
import SharedLayout from "./pages/SharedLayout";
import EventInfo from "./pages/EventInfo";

function App() {
  const dispatch = useDispatch();
  const { isLoading, monthIndex } = useSelector((store) => store.calendar);

  useMemo(() => {
    dispatch(getCalendarEvents());
  }, []);

  useEffect(() => {
    dispatch(handleCurrentMonth());
  }, [monthIndex]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="calendarDKO" element={<CalendarDKO />}>
            <Route path="even-info/:id" element={<EventInfo />} />
          </Route>
          <Route path="calendarCORP" element={<CalendarCORP />} />
          <Route path="CalendarRETAIL" element={<CalendarRETAIL />} />
          <Route path="CalendarDRPZ" element={<CalendarDRPZ />} />
        </Route>
        <Route path="*" element={<div>404 Erorr</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
