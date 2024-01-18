import { useEffect, useMemo } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./utils";
import { useGlobalContext } from "./context/GlobalContext";
import DaysOfWeek from "./components/DaysOfWeek";
import SearchForm from "./components/SearchForm";
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
import Popup from "./pages/Popup";

function App() {
  const dispatch = useDispatch();
  const { isLoading, monthIndex, calendarEvents } = useSelector(
    (store) => store.calendar
  );

  useEffect(() => {
    dispatch(getCalendarEvents());
  }, []);

  useEffect(() => {
    dispatch(handleCurrentMonth());
  }, [monthIndex]);

  const getDate = useMemo(() => {
    dispatch(handleEvents());
  }, []);

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
            <Route path="popup" element={<Popup />} />
          </Route>
          <Route path="calendarCORP" element={<CalendarCORP />} />
          <Route path="CalendarRETAIL" element={<CalendarRETAIL />} />
          <Route path="CalendarDRPZ" element={<CalendarDRPZ />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
// month = { currentMonth };
