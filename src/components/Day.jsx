import dayjs from "dayjs";
import { useGlobalContext } from "../context/GlobalContext";
import Event from "./Event";
import { data } from "../data";

const Day = ({ day, rowIndex }) => {
  // current day
  const highlightCurrDay = () =>
    day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "highlightDay" : "";

  return (
    <div className={"day"}>
      {/* day */}
      {dayjs(day).isBefore(dayjs().subtract(1, "day")) ? (
        <p className={`day__text ${highlightCurrDay()} dim`}>
          {day.format("D")}
        </p>
      ) : (
        <p className={`day__text ${highlightCurrDay()} `}>{day.format("D")}</p>
      )}
    </div>
  );
};
export default Day;
