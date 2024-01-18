import dayjs from "dayjs";

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

  eventEnd += 1;
  const titleLimit = name.substring(0, 18);
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
