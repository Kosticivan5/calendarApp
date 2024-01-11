import dayjs from "dayjs";
import { useGlobalContext } from "../context/GlobalContext";
import Event from "./Event";
import { data } from "../data";

const Day = ({ day, rowIndex }) => {
  // current day
  const highlightCurrDay = () =>
    day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "highlightDay" : "";

  // current week
  // const highlightCurrWeek = (index) => {
  //   if (
  //     index === 0 &&
  //     dayjs(day).week() === dayjs(new Date()).week() &&
  //     dayjs(day).year() === dayjs(new Date()).year()
  //   ) {
  //     return " day highlightWeek leftRounded";
  //   } else if (
  //     index === 4 &&
  //     dayjs(day).week() === dayjs(new Date()).week() &&
  //     dayjs(day).year() === dayjs(new Date()).year()
  //   ) {
  //     return " day highlightWeek rightRounded";
  //   } else if (
  //     dayjs(day).week() === dayjs(new Date()).week() &&
  //     dayjs(day).year() === dayjs(new Date()).year()
  //   ) {
  //     return " day highlightWeek";
  //   } else if (index === 0 && dayjs(day).year() === dayjs(new Date()).year()) {
  //     return "noBorder";
  //   } else {
  //     return "day";
  //   }
  // };

  return (
    // <div className={highlightCurrWeek(rowIndex)}>
    <div className={day}>
      {/* day */}
      {dayjs(day).isBefore(dayjs().subtract(1, "day")) ? (
        <p className={`day__text ${highlightCurrDay()} dim`}>
          {day.format("D")}
        </p>
      ) : (
        <p className={`day__text ${highlightCurrDay()} `}>{day.format("D")}</p>
      )}
      {/* events */}
      {data.map((info) => {
        const { id, start_date, finish_date, name } = info;

        // if (
        //   dayjs(day).format("YY-MM-DD") === dayjs(start_date).format("YY-MM-DD")
        // ) {
        //   return <Event key={id} name={name} />;
        // }
        // return;
      })}
    </div>
  );
};
export default Day;
