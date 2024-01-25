import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { openEvent } from "../features/eventInfo/EventInfoSlice";

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
}) => {
  const eventStart = dayjs(start_date).day();
  let eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");
  eventEnd += 1;
  const titleLimit = name.substring(0, 18);

  const { filteredEvents } = useSelector((store) => store.searchBarFilter);

  const evt = filteredEvents.find((evt) => id === evt.id);

  const registeredEventClass = () => {
    if (registred === 1) {
      return "event-registered";
    }
  };

  // useEffect(()=>{
  //   const blurredEvents = () => {
  //     const evt = filteredEvents.find((evt) => evt.id === id);
  //     if (evt !== undefined && evt.id === id) {
  //       return "blur";
  //     }
  //   };

  // },[filteredEvents])

  return (
    <Link
      style={evt && { opacity: "0.3" }}
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
