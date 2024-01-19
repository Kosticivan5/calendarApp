import { Outlet } from "react-router-dom";
import CalendarNavBar from "../components/CalendarNavBar";

const SharedLayout = () => {
  return (
    <>
      <div className="banner">
        <img src="banner.jpg" alt="" />
        <p>Календарь</p>
      </div>
      <CalendarNavBar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
