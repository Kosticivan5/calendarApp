import dayjs from "dayjs";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { data } from "../data";
import { getMonth } from "../utils";
import { nanoid } from "nanoid";
import { getWeeksBetweenDates } from "../CalculateMultiWeek";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useMemo(() => {
    data.map((info) => {
      const { name, id, start_date, finish_date } = info;

      // ========

      // Calculate the number of different weeks between start_date and finish_date
      getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date));

      // Check if start_date and finish_date fall into different weeks
      if (dayjs(start_date).week() !== dayjs(finish_date).week()) {
        // Loop through the weeks between start_date and finish_date
        let newStartDate;
        let spanTransfer;
        let newDay;
        let isFirst;
        let isLast;
        let isMiddle;
        for (
          let i = 0;
          i <= getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date));
          i++
        ) {
          // Initialize variables for the new event

          if (i === 0) {
            newStartDate = start_date;
            isFirst = 1;
          } else {
            isFirst = 0;
          }
          if (
            i ===
            getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date) - 1)
          ) {
            isLast = 1;
          }

          if (
            i > 0 &&
            i < getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date) - 1)
          ) {
            isMiddle = 1;
          } else {
            isMiddle = 0;
          }

          // Calculate the day of the week for the initial event start date
          let eventStart = dayjs(newStartDate).day();

          // Calculate the number of days allowed to span to the end of the week
          const allowedToSpan = 6 - eventStart;

          let addDays = allowedToSpan;

          if (dayjs(finish_date).diff(newStartDate, "day") < allowedToSpan) {
            addDays = dayjs(finish_date).diff(newStartDate, "day");
          }

          // Calculate the new finish date by adding allowed days to the start date
          let newFinishDate = dayjs(newStartDate).add(addDays, "day");
          newFinishDate = dayjs(newFinishDate).format();

          // Calculate the number of days between the new start and finish dates
          let eventSpanEnd = dayjs(finish_date).diff(
            dayjs(newStartDate),
            "day"
          );

          // Ensure eventEnd is at least 1 day
          if (eventSpanEnd < 1) {
            eventSpanEnd = 1;
          }

          // Create a new event object
          const newEvent = {
            id: nanoid(),
            name: name,
            start_date: dayjs(newStartDate).format(),
            finish_date: dayjs(newFinishDate).format(),
            is_multiWeek: true,
            is_first: isFirst,
            is_last: isLast,
            is_Middle: isMiddle,
          };

          // Update state with the new event
          setNewData((newData) => [newEvent, ...newData]);

          if (eventSpanEnd > allowedToSpan) {
            spanTransfer = eventSpanEnd - allowedToSpan;
          }
          newDay = dayjs(finish_date).subtract(spanTransfer, "day");
          if (dayjs(newDay).get("day") === 6) {
            newDay = dayjs(newDay).add(2, "day");
          }
          if (dayjs(newDay).get("day") === 0) {
            newDay = dayjs(newDay).add(1, "day");
          }

          // update newStartDate
          newStartDate = newDay;

          const titleLimit = name.substring(0, 18);
        }

        return;
      }
      setNewData((newData) => [...newData, info]);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        currentMonth,
        newData,
        setNewData,
      }}
    >
      {/* {console.log(newData)} */}
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
