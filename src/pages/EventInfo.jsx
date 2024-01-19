import { useDispatch, useSelector } from "react-redux";

const EventInfo = () => {
  const { isOpen } = useSelector((store) => store.eventInfo);

  return (
    <div className={isOpen ? "event-info slide-in" : "event-info"}>
      EventInfo
    </div>
  );
};
export default EventInfo;
