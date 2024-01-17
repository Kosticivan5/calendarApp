import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Event = ({
  name,
  start_date,
  finish_date,
  multiWeek,
  is_first,
  is_last,
  is_Middle,
}) => {
  const eventStart = dayjs(start_date).day();

  let eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");
  // if (eventEnd < 1) {
  //   eventEnd = 1;
  // }
  eventEnd += 1;
  const titleLimit = name.substring(0, 18);

  // console.log(dayjs(start_date).format("YY MM DD"));

  // console.table(
  //   dayjs(start_date).format("YY-MM-DD"),
  //   "___",
  //   dayjs(start_date).day(),
  //   "___",
  //   dayjs(finish_date).format("YY-MM-DD"),
  //   "___",
  //   eventEnd,
  //   "___",
  //   dayjs(finish_date).diff(dayjs(start_date), "week")
  // );
  console.log(eventEnd);
  return (
    <button
      className={dayjs(finish_date).isBefore(dayjs()) ? "event dim" : "event"}
      data-start={eventStart}
      data-span={eventEnd}
      data-isfirst={is_first}
      data-islast={is_last}
      data-ismiddle={is_Middle}
    >
      <span>
        {eventEnd > 1 || name.length <= titleLimit.length
          ? name
          : `${titleLimit}...`}
      </span>
    </button>
  );
};

export default Event;
