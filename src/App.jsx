import { useEffect, useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./utils";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, setMonthIndex } = useGlobalContext();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <section className="calendar">
      <div
        style={{
          width: "100%",
          margin: "0 auto 2.5rem",
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          type="text"
          className="input"
          style={{
            display: "block",
            background: "#e9ecf1",
            width: "calc(100% - 128px)",
            border: "none",
            outline: "none",
            height: "48px",
            borderRadius: "12px",
          }}
        />
        <button
          style={{
            display: "block",
            background: "red",
            color: "white",
            width: "120px",
            border: "none",
            outline: "none",
            height: "48px",
            borderRadius: "12px",
          }}
        >
          Найти
        </button>
      </div>
      <div className="calendar__wrapper">
        <Sidebar />
        <div className="weekdays">
          <CalendarHeader />
          <header className="weekdays__header">
            <p>Понедельник</p>
            <p>Вторник</p>
            <p>Среда</p>
            <p>Четверг</p>
            <p>Пятница</p>
          </header>
          <Month month={currentMonth} />
        </div>
      </div>
    </section>
  );
}

export default App;
