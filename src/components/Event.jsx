import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openEvent } from "../features/eventInfo/EventInfoSlice";

const Event = ({
  name,
  start_date,
  finish_date,
  multiWeek,
  is_first,
  is_last,
  is_Middle,
  id,
}) => {
  const eventStart = dayjs(start_date).day();
  let eventEnd = dayjs(finish_date).diff(dayjs(start_date), "day");
  const dispatch = useDispatch();

  eventEnd += 1;
  const titleLimit = name.substring(0, 18);
  return (
    <Link
      to={`even-info/${id}`}
      className={dayjs(finish_date).isBefore(dayjs()) ? "event dim" : "event"}
      data-start={eventStart}
      data-span={eventEnd}
      data-isfirst={is_first}
      data-islast={is_last}
      data-ismiddle={is_Middle}
      onClick={() => dispatch(openEvent())}
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
