import dayjs from "dayjs";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Event = ({
  name,
  start_date,
  finish_date,
  multiWeek,
  is_first,
  is_last,
  is_Middle,
  id,
  path_id,
  registred,
  isHidden,
}) => {
  const eventStart = dayjs(start_date).day();
  let eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");
  eventEnd += 1;
  const titleLimit = name.substring(0, 18);

  const registeredEventClass = () => {
    if (registred === 1) {
      return "event-registered";
    }
  };

  // console.log(isHidden);

  return (
    <Link
      style={isHidden ? { opacity: 0.3 } : {}}
      to={`event-info/${path_id ? path_id : id}`}
      className={
        dayjs(finish_date).isBefore(dayjs())
          ? `${registeredEventClass()} event dim`
          : `event ${registeredEventClass()}`
      }
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
    </Link>
  );
};

export default Event;
