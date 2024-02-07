import { useEffect } from "react";
import {
  getCalendarEvents,
  handleCurrentMonth,
  handleEvents,
} from "./features/calendar/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter,
  Routes,
  Route,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import CalendarDKO from "./pages/CalendarDKO";
import CalendarCORP from "./pages/CalendarCORP";
import CalendarRETAIL from "./pages/CalendarRETAIL";
import CalendarDRPZ from "./pages/CalendarDRPZ";
import SharedLayout from "./pages/SharedLayout";
import EventInfo from "./pages/EventInfo";
// import Sidebar from "./components/Sidebar";
// import { handleSearchBarEvents } from "./features/Searchbar/searchbarSlice";
import { createHashHistory } from "history";
import { updateFiltersFromUrl } from "./filtersUtils";
import { isSubmitted } from "./features/sidebar/sidebarSlice";
import ErrorPage from "./components/ErrorPage";

function App() {
  const dispatch = useDispatch();

  const history = createHashHistory();
  const location = history.location;
  const pathname = location.pathname;
  const search = location.search;
  const hash = location.hash;

  const { isLoading, monthIndex, calendarEvents } = useSelector(
    (store) => store.calendar
  );

  useEffect(() => {
    const dataAlreadyFetched = JSON.parse(localStorage.getItem("eventList"));
    if (!dataAlreadyFetched || dataAlreadyFetched.length < 1) {
      dispatch(getCalendarEvents());
    }
  }, []);

  useEffect(() => {
    dispatch(handleCurrentMonth());
  }, [monthIndex]);

  useEffect(() => {
    updateFiltersFromUrl(dispatch, location);
    dispatch(isSubmitted(true));
  }, [location.search]);

  useEffect(() => {
    localStorage.setItem("eventList", JSON.stringify(calendarEvents));
  }, [location.search, calendarEvents]);

  // useEffect(() => {
  //   dispatch(handleSearchBarEvents(calendarEvents));
  // }, [calendarEvents]);

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
      errorElement: <ErrorPage />,
      children: [
        {
          path: `calendarDKO`,
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
  ]);

  return (
    <RouterProvider router={router} />

    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<SharedLayout />}>
    //       <Route path="calendarDKO" element={<CalendarDKO />}>
    //         <Route path="event-info/:id" element={<EventInfo />} />
    //       </Route>
    //       <Route path="calendarCORP" element={<CalendarCORP />} />
    //       <Route path="CalendarRETAIL" element={<CalendarRETAIL />} />
    //       <Route path="CalendarDRPZ" element={<CalendarDRPZ />} />
    //     </Route>
    //     <Route path="*" element={<div>404 Erorr</div>} />
    //   </Routes>
    // </HashRouter>
  );
}

export default App;
