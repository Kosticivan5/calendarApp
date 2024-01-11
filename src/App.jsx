import { useEffect, useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./utils";
import { useGlobalContext } from "./context/GlobalContext";
import DaysOfWeek from "./components/DaysOfWeek";
import SearchForm from "./components/SearchForm";

function App() {
  // const [currentMonth, setCurrentMonth] = useState(getMonth());

  // const { monthIndex, setMonthIndex } = useGlobalContext();

  // useEffect(() => {
  //   setCurrentMonth(getMonth(monthIndex));
  // }, [monthIndex]);

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
