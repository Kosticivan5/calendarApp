import dayjs from "dayjs";

const Event = ({ name, start_date, finish_date, row }) => {
  // console.log(row);
  const eventStart = dayjs(start_date).day();
  const eventEnd = dayjs(finish_date).day() - dayjs(start_date).day();
  const titleLimit = name.substring(0, 18);

  return row.map((day) => {
    if (
      dayjs(day).week() === dayjs(start_date).week() &&
      dayjs(day).year() === dayjs(start_date).year()
    ) {
      return (
        <button className="event" data-start={eventStart} data-span={eventEnd}>
          <span>{eventEnd > 1 ? name : `${titleLimit}...`}</span>
        </button>
      );
    }
  });
};
export default Event;
