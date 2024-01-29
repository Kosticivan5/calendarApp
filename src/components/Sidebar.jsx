import FormatDropdown from "./FormatDropdown";
import TypesDropdown from "./TypesDropdown";

import { Form, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCheckbox,
  selectCheckboxes,
} from "../features/checkboxes/checkboxesSlice";
import {
  handleSearchBarChange,
  handleSearchBarEvents,
} from "../features/Searchbar/searchbarSlice";
import { selectFormat } from "../features/formatDropdown/formatDropdownSlice";
import { selectType } from "../features/typesDropdown/typesDropdownSlice";
import { useEffect, useMemo, useState } from "react";
import { isSubmitted } from "../features/sidebar/sidebarSlice";
import { filterEvents } from "../features/calendar/calendarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    registred,
    for_type,
    starting,
    lead_academy,
    lead_friday,
    learn_own,
    digital_lit,
    finance_lit,
  } = useSelector((store) => store.checkboxes);
  const { searchValue } = useSelector((store) => store.searchBarFilter);
  const { formatValue } = useSelector((store) => store.formatDropdown);
  const { typeValue } = useSelector((store) => store.typesDropdown);

  const { submitted } = useSelector((store) => store.sidebar);
  const { filteredEvents } = useSelector((store) => store.searchBarFilter);
  const { calendarEvents } = useSelector((store) => store.calendar);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const queryParams = Object.fromEntries(urlSearchParams.entries());

    if (submitted) {
      const conditions = {
        ...(registred === 1 ? { registred: 1 } : undefined),
        ...(for_type === 1 ? { for_type: "boss" } : undefined),
        ...(starting === 1 ? { starting: 1 } : undefined),
        ...(lead_academy === 1 ? { lead_academy: 1 } : undefined),
        ...(lead_friday === 1 ? { lead_friday: 1 } : undefined),
        ...(learn_own === 1 ? { learn_own: 1 } : undefined),
        ...(digital_lit === 1 ? { digital_lit: 1 } : undefined),
        ...(finance_lit === 1 ? { finance_lit: 1 } : undefined),
        ...(searchValue !== "" ? { name: searchValue } : undefined),
        ...(formatValue !== "" ? { type: formatValue } : undefined),
        ...(typeValue !== "" ? { type: typeValue } : undefined),
      };

      const queryString = new URLSearchParams(conditions).toString();

      navigate({ search: queryString });

      const newFilteredEvents = calendarEvents.map((evt) => {
        const anyValueUndefined = Object.values(conditions).some(
          (value) => value === undefined
        );

        if (anyValueUndefined) {
          return { ...evt, isHidden: false };
        }

        const allConditionsMet = Object.entries(conditions).every(
          ([key, value]) => {
            console.log(key, value);
            if (key === "name") {
              return evt[key].toLowerCase().startsWith(value.toLowerCase());
            }
            if (key === "for_type") {
              return evt[key].indexOf("boss]") !== -1;
            }

            return evt[key] === conditions[key];
          }
        );

        return { ...evt, isHidden: !allConditionsMet };
      });

      dispatch(filterEvents(newFilteredEvents));
      dispatch(isSubmitted(false));
    }
  }, [
    registred,
    for_type,
    starting,
    lead_academy,
    lead_friday,
    learn_own,
    digital_lit,
    finance_lit,
    navigate,
    submitted,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isSubmitted(true));
  };

  return (
    <aside className="sidebar">
      <form
        onSubmit={handleSubmit}
        action="/calendarDKO"
        className="sidebar__form"
      >
        {/* top checkbox filters */}
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="registred"
            id="mine"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="mine">Я записан</label>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="for_type"
            id="managers"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="managers">Для руководителей</label>
        </div>

        {/* select filters */}
        <div className="select-input">
          <FormatDropdown />
          <TypesDropdown />
        </div>
        {/* bottom checkbox filters */}
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="starting"
            id="starting"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="starting">Starting</label>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="lead_academy"
            id="lead_academy"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="lead_academy">Академия лидеров</label>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="lead_friday"
            id="lead_friday"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="lead_friday">Лидерские пятница</label>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="learn_own"
            id="learn_own"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="learn_own">Учись у своих</label>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="digital_lit"
            id="digital_lit"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="digital_lit">Цифровая грамотность</label>
        </div>
        <div className="checkbox-input">
          <input
            type="checkbox"
            name="finance_lit"
            id="finance_lit"
            onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          />
          <label htmlFor="finance_lit">Финансовая грамостность</label>
        </div>
        {/* control buttons */}
        <div className="button-container">
          <button type="submit">Показать</button>
          <button type="button">Сбросить фильтры</button>
        </div>
      </form>
    </aside>
  );
};
export default Sidebar;

// =======================

// import FormatDropdown from "./FormatDropdown";
// import TypesDropdown from "./TypesDropdown";
// import { useForm } from "react-hook-form";

// const Sidebar = () => {
//   const { register, handleSubmit, watch, formState } = useForm();

//   // Use watch to track the state of checkboxes
//   const mineChecked = watch("mine", false);
//   const managersChecked = watch("managers", false);
//   // Add more watch calls for other checkboxes

//   const onSubmit = (data) => {
//     console.log(data);
//     console.log("Mine checkbox checked:", mineChecked);
//     console.log("Managers checkbox checked:", managersChecked);
//     // Add more console.log statements for other checkboxes
//   };

//   return (
//     <aside className="sidebar">
//       <form onSubmit={handleSubmit(onSubmit)} className="sidebar__form">
//         {/* top checkbox filters */}
//         <div className="checkbox-input">
//           <input
//             defaultValue="mine"
//             {...register("mine")}
//             type="checkbox"
//             name=""
//             id="mine"
//           />
//           <label htmlFor="mine">Я записан</label>
//         </div>
//         <div className="checkbox-input">
//           <input
//             {...register("managers")}
//             type="checkbox"
//             name=""
//             id="managers"
//           />
//           <label htmlFor="managers">Для руководителей</label>
//         </div>

//         {/* select filters */}
//         <div className="select-input">
//           <FormatDropdown />
//           <TypesDropdown />
//         </div>
//         {/* bottom checkbox filters */}
//         {/* Add similar structures for other checkboxes */}
//         {/* control buttons */}
//         <div className="button-container">
//           <button type="submit">Показать</button>
//           <button>Сбросить фильтры</button>
//         </div>
//       </form>
//     </aside>
//   );
// };

// export default Sidebar;
