import { NavLink } from "react-router-dom";

const CalendarNavBar = () => {
  return (
    <nav className="calendar-nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/calendarDKO"
      >
        Вебинары и тренинги
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/calendarCORP"
      >
        Календарь CORP
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/calendarRETAIL"
      >
        Календарь RETAIL
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/calendarDRPZ"
      >
        Календарь ДРПЗ
      </NavLink>
    </nav>
  );
};
export default CalendarNavBar;
