import FormatDropdown from "./FormatDropdown";
import TypesDropdown from "./TypesDropdown";

import { Form } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Form onSubmit={handleSubmit} className="sidebar__form">
        {/* top checkbox filters */}
        <div className="checkbox-input">
          <input type="checkbox" name="fa" id="mine" />
          <label htmlFor="mine">Я записан</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" name="dt" id="managers" />
          <label htmlFor="managers">Для руководителей</label>
        </div>

        {/* select filters */}
        <div className="select-input">
          <FormatDropdown />
          <TypesDropdown />
        </div>
        {/* bottom checkbox filters */}
        <div className="checkbox-input">
          <input type="checkbox" name="" id="starting" />
          <label htmlFor="starting">Starting</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" name="" id="academy" />
          <label htmlFor="academy">Академия лидеров</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" name="" id="liders" />
          <label htmlFor="liders">Лидерские пятница</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" name="" id="learn-own" />
          <label htmlFor="learn-own">Учись у своих</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" name="" id="tech" />
          <label htmlFor="tech">Цифровая грамотность</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" name="" id="finance" />
          <label htmlFor="finance">Финансовая грамостность</label>
        </div>
        {/* control buttons */}
        <div className="button-container">
          <button type="submit">Показать</button>
          <button>Сбросить фильтры</button>
        </div>
      </Form>
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
