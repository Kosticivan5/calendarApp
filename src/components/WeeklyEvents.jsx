import { data } from "../data";
import Day from "./Day";
import Event from "./Event";
import dayjs from "dayjs";

const WeeklyEvents = ({ row }) => {
  const mapEvents = new Map();

  return (
    <>
      <div className="currentWeekDay">
        {row.map((day, idx) => {
          mapEvents.set(idx, day);
          return <Day key={idx} day={day} rowIndex={idx} />;
        })}
      </div>
      <div className="events">
        {data.map((info) => {
          for (const day of mapEvents.values()) {
            if (
              dayjs(day).week() === dayjs(info.start_date).week() &&
              dayjs(day).year() === dayjs(info.start_date).year() &&
              dayjs(day).month() === dayjs(info.start_date).month()
            ) {
              return <Event id={info.id} {...info} />;
            }
          }
        })}
      </div>
    </>
  );
};
export default WeeklyEvents;
