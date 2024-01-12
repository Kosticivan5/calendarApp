import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Event = ({ name, start_date, finish_date }) => {
  const [multiWeek, setMultiWeek] = useState(false);

  const eventStart = dayjs(start_date).day();
  // const eventEnd = dayjs(finish_date).day() - dayjs(start_date).day();
  const eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");
  const titleLimit = name.substring(0, 18);

  // console.log(dayjs(start_date).day(), dayjs(finish_date).day());
  // console.log(findate);
  const eventEndDate = parseInt(dayjs(finish_date).format("D"), 10);
  const eventStartDate = parseInt(dayjs(start_date).format("D"), 10);

  // console.log(
  //   dayjs(start_date).format("YY-MM-DD"),
  //   dayjs(start_date).endOf("month").format("YY-MM-DD")
  // );

  const isMultiWeekEvent = (start, span) => {
    const allowedToSpan = 6 - start;

    if (span > allowedToSpan) {
      setMultiWeek(true);
    }
  };

  useEffect(() => {
    const isMultiWeekEvent = (start, span) => {
      const allowedToSpan = 6 - start;

      if (span > allowedToSpan) {
        setMultiWeek(true);
      }
    };
    isMultiWeekEvent(eventStart, eventEnd);
  }, [multiWeek]);

  console.log(multiWeek);

  console.table(
    dayjs(start_date).format("YY-MM-DD"),
    "___",
    dayjs(start_date).day(),
    "___",
    dayjs(finish_date).format("YY-MM-DD"),
    "___",
    dayjs(finish_date).diff(dayjs(start_date), "day")
  );

  // console.log(dayjs("2024-01-31").week());
  // console.log(dayjs("2024-01-31").add(1, "week").format("YY-MM-DD"));

  return (
    <button
      className={
        dayjs(start_date).isBefore(dayjs().subtract(1, "day"))
          ? "event dim"
          : "event"
      }
      data-start={eventStart}
      data-span={eventEnd}
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
