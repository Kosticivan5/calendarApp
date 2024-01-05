import dayjs from "dayjs";

const Day = ({ day, rowIndex }) => {
  // console.log(day.format("DD-MM-YY"));
  // console.log(dayjs().format("DD-MM-YY"));

  //   const highlightCurrDay = () => {
  //     const days = day.format("DD-MM-YY");
  //     const currDay = dayjs().format("DD-MM-YY");

  //     if (days === currDay) {
  //       console.log("hello");
  //       return "highlightDay";
  //     } else {
  //       return "";
  //     }
  //   };

  const highlightCurrDay = () =>
    day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "highlightDay" : "";

  const highlightCurrWeek = (index) => {
    if (index === 0 && dayjs(day).week() === dayjs(new Date()).week()) {
      return " day highlightWeek leftRounded";
    } else if (index === 4 && dayjs(day).week() === dayjs(new Date()).week()) {
      return " day highlightWeek rightRounded";
    } else if (dayjs(day).week() === dayjs(new Date()).week()) {
      return " day highlightWeek";
    } else if (index === 0) {
      return "noBorder";
    } else {
      return "day";
    }
  };

  console.log(highlightCurrWeek(rowIndex));

  return (
    <div className={highlightCurrWeek(rowIndex)}>
      <p className={`day__text ${highlightCurrDay()} `}>{day.format("D")} </p>
    </div>
  );
};
export default Day;
