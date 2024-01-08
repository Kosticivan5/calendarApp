import dayjs from "dayjs";

const Day = ({ day, rowIndex }) => {
  const newDay = day.format("DD-MM-YY");
  console.log(dayjs(newDay).isBefore(dayjs().format("DD-MM-YY")));

  // console.log(dayjs().format("DD-MM-YY"));

  const highlightCurrDay = () =>
    day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "highlightDay" : "";

  const highlightCurrWeek = (index) => {
    if (
      index === 0 &&
      dayjs(day).week() === dayjs(new Date()).week() &&
      dayjs(day).year() === dayjs(new Date()).year()
    ) {
      return " day highlightWeek leftRounded";
    } else if (
      index === 4 &&
      dayjs(day).week() === dayjs(new Date()).week() &&
      dayjs(day).year() === dayjs(new Date()).year()
    ) {
      return " day highlightWeek rightRounded";
    } else if (
      dayjs(day).week() === dayjs(new Date()).week() &&
      dayjs(day).year() === dayjs(new Date()).year()
    ) {
      return " day highlightWeek";
    } else if (index === 0 && dayjs(day).year() === dayjs(new Date()).year()) {
      return "noBorder";
    } else {
      return "day";
    }
  };

  return (
    <>
      {dayjs(day).isBefore(dayjs().subtract(1, "day")) ? (
        <div className={`${highlightCurrWeek(rowIndex)} dim `}>
          <p className={`day__text ${highlightCurrDay()} `}>
            {day.format("D")}
          </p>
        </div>
      ) : (
        <div className={highlightCurrWeek(rowIndex)}>
          <p className={`day__text ${highlightCurrDay()} `}>
            {day.format("D")}
          </p>
        </div>
      )}
    </>
  );
};
export default Day;
