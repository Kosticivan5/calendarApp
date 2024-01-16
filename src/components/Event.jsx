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
  // const [multiWeek, setMultiWeek] = useState(false);
  // const [spanTransfer, setSpanTransfer] = useState(0);

  const eventStart = dayjs(start_date).day();

  let eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");
  if (eventEnd < 1) {
    eventEnd = 1;
  }
  const titleLimit = name.substring(0, 18);

  // useEffect(() => {
  //   const isMultiWeekEvent = (start, span) => {
  //     const allowedToSpan = 6 - start;

  //     if (span > allowedToSpan) {
  //       setMultiWeek(true);
  //       setSpanTransfer(span - allowedToSpan);
  //     }
  //   };
  //   isMultiWeekEvent(eventStart, eventEnd);
  // }, [multiWeek]);

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

  // console.log(dayjs("2024-01-31").week());
  // console.log(dayjs("2024-01-31").add(1, "week").format("YY-MM-DD"));

  return (
    <button
      className={
        dayjs(start_date).isBefore(dayjs().subtract(1, "day"))
          ? "event dim"
          : "event"
      }
      // style={
      //   is_first
      //     ? {
      //         marginRight: 0,
      //         borderTopRightRadius: 0,
      //         borderBottomRightRadius: 0,
      //         borderRight: "none",
      //       }
      //     : {}
      // }
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
