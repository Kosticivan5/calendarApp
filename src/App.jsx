import { useEffect, useMemo } from "react";
import {
  getCalendarEvents,
  handleCurrentMonth,
} from "./features/calendar/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import CalendarDKO from "./pages/CalendarDKO";
import CalendarCORP from "./pages/CalendarCORP";
import CalendarRETAIL from "./pages/CalendarRETAIL";
import CalendarDRPZ from "./pages/CalendarDRPZ";
import SharedLayout from "./pages/SharedLayout";
import EventInfo from "./pages/EventInfo";
import { handleSearchBarEvents } from "./features/Searchbar/searchbarSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, monthIndex, calendarEvents } = useSelector(
    (store) => store.calendar
  );

  useMemo(() => {
    dispatch(getCalendarEvents());
  }, []);

  useEffect(() => {
    dispatch(handleCurrentMonth());
  }, [monthIndex]);

  useEffect(() => {
    dispatch(handleSearchBarEvents(calendarEvents));
  }, [calendarEvents]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  const router = createHashRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        {
          path: "calendarDKO",
          element: <CalendarDKO />,
          children: [{ path: "event-info/:id", element: <EventInfo /> }],
        },
        {
          path: "CalendarCORP",
          element: <CalendarCORP />,
        },
        {
          path: "CalendarRETAIL",
          element: <CalendarRETAIL />,
        },
        {
          path: "CalendarDRPZ",
          element: <CalendarDRPZ />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>404 Erorr</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
