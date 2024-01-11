import dayjs from "dayjs";
const Event = ({ name, start_date, finish_date }) => {
  const eventStart = dayjs(start_date).day();
  const eventEnd = dayjs(finish_date).day() - dayjs(start_date).day();
  const titleLimit = name.substring(0, 18);
  return (
    <button className="event" data-start={eventStart} data-span={eventEnd}>
      <span>{eventEnd > 1 ? name : `${titleLimit}...`}</span>
    </button>
  );
};
export default Event;
