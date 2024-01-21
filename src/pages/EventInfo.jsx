import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { PiMonitorPlayLight } from "react-icons/pi";
import dayjs from "dayjs";

const EventInfo = () => {
  const { calendarEvents } = useSelector((store) => store.calendar);

  const { id: eventId } = useParams();

  const ev = calendarEvents.find((event) => event.id === eventId);

  // console.log(
  //   dayjs(ev.start_date).format("DD.MM.YYYY"),
  //   dayjs(ev.start_date).format("LT")
  // );

  return (
    <>
      <Link to={"/calendarDKO"}>
        <div className="overlay"></div>
      </Link>
      <aside className="event-info">
        {/* close btn */}
        <Link className="close-sidebar-btn" to={"/calendarDKO"}>
          <GrClose />
        </Link>
        {/* info */}
        <header className="event-info-header">
          <div className="time-date-container">
            <div className="date">
              <CiCalendar />
              <p>{dayjs(ev.start_date).format("LT")}</p>
              <p>мск</p>
            </div>
            <div className="time">
              <CiClock2 />
              <p>40 минут</p>
            </div>
          </div>
          <div className="share">
            <CiShare2 />
            <p>Поделиться</p>
          </div>
        </header>
        {/* event info center */}
        <section className="event-info-center">
          <div className="type">
            <PiMonitorPlayLight />
            <p>Очно</p>
          </div>
          <h2 className="info-title">{ev.name}</h2>

          <div className="info-text">
            <p>Начало</p>
            <p>
              {dayjs(ev.start_date).format("DD.MM.YYYY")}{" "}
              {dayjs(ev.start_date).format("LT")} мск
            </p>
            <p>Завершение</p>
            <p>
              {dayjs(ev.finish_date).format("DD.MM.YYYY")}{" "}
              {dayjs(ev.finish_date).format("LT")} мск
            </p>
            <p>Регион</p>
            <p>Нижний Новгород, Самара, Красноярск</p>
            <p>Преподаватель</p>
            <p>Гаджимурадова Мадина Муратбековна </p>
            <p>Направление</p>
            <p>Личная пятница</p>
            <p>Друзья, приглашаем вам на вебинар в рамках проекта BeExpert.</p>
          </div>
        </section>
        <div className="info-button-container">
          <button>Зарегистрироваться</button>
          {/* <button>Отменить регистрацию</button> */}
        </div>
      </aside>
    </>
  );
};
export default EventInfo;
