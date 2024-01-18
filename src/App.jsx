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

function App() {
  const dispatch = useDispatch();
  const { isLoading, monthIndex, calendarEvents } = useSelector(
    (store) => store.calendar
  );

  // const [currentMonth, setCurrentMonth] = useState(getMonth());

  // const { monthIndex, setMonthIndex } = useGlobalContext();

  // useEffect(() => {
  //   setCurrentMonth(getMonth(monthIndex));
  // }, [monthIndex]);

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
    <section className="calendar">
      <SearchForm />
      <div className="calendar__wrapper">
        <Sidebar />
        <div className="weekdays">
          <CalendarHeader />
          <DaysOfWeek />
          <Month />
        </div>
      </div>
    </section>
  );
}

export default App;
// month = { currentMonth };
