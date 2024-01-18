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
  // const [monthIndex, setMonthIndex] = useState(dayjs().month());
  // const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [newData, setNewData] = useState([]);

  // useEffect(() => {
  //   setCurrentMonth(getMonth(monthIndex));
  // }, [monthIndex]);

  const getData = useMemo(() => {
    data.map((info) => {
      const { name, id, start_date, finish_date } = info;

      getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date));

      if (dayjs(start_date).week() !== dayjs(finish_date).week()) {
        let newStartDate;
        let spanTransfer;
        let newDay;
        let isFirst;
        let isLast;
        let isMiddle;
        let newFinishDate;
        for (
          let i = 0;
          i <= getWeeksBetweenDates(dayjs(start_date), dayjs(finish_date));
          i++
        ) {
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

          let eventStart = dayjs(newStartDate).day();

          const allowedToSpan = 6 - eventStart;

          let addDays = allowedToSpan;

          if (dayjs(finish_date).diff(newStartDate, "day") < allowedToSpan) {
            addDays = dayjs(finish_date).diff(newStartDate, "day");
          }

          newFinishDate = dayjs(newStartDate).add(addDays, "day").format();
          // newFinishDate = dayjs(newFinishDate).format();

          // if (dayjs(newStartDate).month() !== dayjs(newFinishDate).month()) {
          //   let lastDayOfMonth = dayjs(newStartDate).endOf("month").format();
          //   addDays = dayjs(lastDayOfMonth).diff(newStartDate, "day");
          //   isLast = 0;
          //   newFinishDate = dayjs(newStartDate).add(addDays, "day").format();
          // }
          let eventSpanEnd = dayjs(finish_date).diff(
            dayjs(newStartDate),
            "day"
          );

          if (eventSpanEnd < 1) {
            eventSpanEnd = 1;
          }

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

          console.log(newEvent);

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
        newData,
        setNewData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
