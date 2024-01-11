import { data } from "../data";
import Day from "./Day";
import Event from "./Event";

const WeeklyEvents = ({ row }) => {
  return (
    <>
      <div className="currentWeekDay">
        {row.map((day, idx) => {
          return <Day key={idx} day={day} rowIndex={idx} />;
        })}
      </div>
      <div className="events">
        {data.map((info) => {
          return <Event id={info.id} {...info} row={row} />;
        })}
      </div>
    </>
  );
};
export default WeeklyEvents;
