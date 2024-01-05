import dayjs from "dayjs";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import { useGlobalContext } from "../context/GlobalContext";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useGlobalContext();

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const monthDisplayed = dayjs(new Date(dayjs().year(), monthIndex)).format(
    "MMMM YYYY"
  );

  return (
    <header className="calendar__header">
      <div className="calendar__header--container">
        <h2>{monthDisplayed}</h2>
        <div className="btn-container">
          <button onClick={handlePrevMonth} className="arrow left">
            <img src={leftArrow} alt="left-arrow" />
          </button>
          <button onClick={handleNextMonth} className="arrow right">
            <img src={rightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default CalendarHeader;
