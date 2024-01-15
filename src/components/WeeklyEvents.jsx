import Day from "./Day";
import Event from "./Event";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useState, useEffect, useMemo, useCallback } from "react";
import { CalculateMultiWeek } from "../CalculateMultiWeek";
import { useGlobalContext } from "../context/GlobalContext";

const WeeklyEvents = ({ row }) => {
  const [multiWeek, setMultiWeek] = useState({});
  // const [spanTransfer, setSpanTransfer] = useState(0);
  const mapEvents = new Map();

  const { newData } = useGlobalContext();
  console.log(newData);

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
          // ====
          // ====

          const {
            id,
            name,
            start_date,
            finish_date,
            is_multiWeek,
            is_first,
            is_last,
          } = data;

          // const eventStart = dayjs(start_date).day();

          // let eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");

          // if (eventEnd < 1) {
          //   eventEnd = 1;
          // }
          // const titleLimit = name.substring(0, 18);

          // if (dayjs(finish_date).week() !== dayjs(start_date).week()) {
          //   CalculateMultiWeek(start_date, finish_date, name);
          // }

          // ====
          // ====

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
                />
              );
            }
            // if (
            //   dayjs(day).week() === dayjs(newStartDate).week() &&
            //   dayjs(day).year() === dayjs(newStartDate).year() &&
            //   dayjs(day).month() === dayjs(newStartDate).month()
            // ) {
            //   // return (
            //   //   <Event
            //   //     id={id}
            //   //     start_date={newStartDate}
            //   //     finish_date={finish_date}
            //   //     name={name}
            //   //     multiWeek={multiWeek}
            //   //     eventStart={newEventStart}
            //   //     eventEnd={spanTransfer}
            //   //     titleLimit={titleLimit}
            //   //   />
            //   // );
            // }
          }
        })}
      </div>
    </>
  );
};
export default WeeklyEvents;
