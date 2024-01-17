import Day from "./Day";
import Event from "./Event";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../context/GlobalContext";

const WeeklyEvents = ({ row }) => {
  const mapEvents = new Map();
  const { newData, monthIndex } = useGlobalContext();

  return (
    <>
      <div className="currentWeekDay">
        {row.map((day, idx) => {
          mapEvents.set(nanoid(), day);

          return <Day key={idx} day={day} rowIndex={idx} />;
        })}
      </div>
      <div className="events">
        {newData.map((data) => {
          const {
            id,
            name,
            start_date,
            finish_date,
            is_multiWeek,
            is_first,
            is_last,
            is_Middle,
          } = data;

          for (const day of mapEvents.values()) {
            if (
              dayjs(day).week() === dayjs(start_date).week() &&
              dayjs(day).year() === dayjs(start_date).year() &&
              dayjs(day).month() === dayjs(start_date).month()
            ) {
              return (
                <Event
                  key={id}
                  start_date={start_date}
                  finish_date={finish_date}
                  name={name}
                  multiWeek={is_multiWeek}
                  is_first={is_first}
                  is_last={is_last}
                  is_Middle={is_Middle}
                />
              );
            }
          }
        })}
      </div>
    </>
  );
};
export default WeeklyEvents;
