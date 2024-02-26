import FormatDropdown from "./FormatDropdown";
import TypesDropdown from "./TypesDropdown";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { isSubmitted } from "../features/sidebar/sidebarSlice";
import useHandleFilteredEvents from "./HandleFilteredEvents";
import CheckboxesBottom from "./CheckboxesBottom";
import CheckboxesTop from "./CheckboxesTop";
import SidebarControlButtons from "./SidebarControlButtons";

const Sidebar = () => {
  const dispatch = useDispatch();

  // const filteredLogic = useHandleFilteredEvents();

  // useEffect(() => {
  //   filteredLogic();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isSubmitted(true));
  };

  return (
    <aside className="sidebar">
      <form
        onSubmit={handleSubmit}
        // action="/calendarDKO"
        className="sidebar__form"
      >
        <CheckboxesTop />
        {/* select filters */}
        <div className="select-input">
          <FormatDropdown />
          <TypesDropdown />
        </div>
        <CheckboxesBottom />
        <SidebarControlButtons />
      </form>
    </aside>
  );
};
export default Sidebar;
