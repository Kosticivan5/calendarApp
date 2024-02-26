import { useDispatch } from "react-redux";
import { resetCheckboxes } from "../features/checkboxes/checkboxesSlice";
import { isSubmitted } from "../features/sidebar/sidebarSlice";
import { resetType } from "../features/typesDropdown/typesDropdownSlice";
import { resetFormat } from "../features/formatDropdown/formatDropdownSlice";

import useHandleFilteredEvents from "./HandleFilteredEvents";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SidebarControlButtons = () => {
  const dispatch = useDispatch();
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

  const handleReset = () => {
    dispatch(resetCheckboxes());
    dispatch(resetType());
    dispatch(resetFormat());
    dispatch(isSubmitted(true));
  };

  const filteredLogic = useHandleFilteredEvents(
    registred,
    for_type,
    starting,
    lead_academy,
    lead_friday,
    learn_own,
    digital_lit,
    finance_lit
  );

  useEffect(() => {
    filteredLogic();
  }, [
    registred,
    for_type,
    starting,
    lead_academy,
    lead_friday,
    learn_own,
    digital_lit,
    finance_lit,
  ]);

  return (
    <div className="button-container">
      <button type="submit">Показать</button>
      <button onClick={handleReset} type="button">
        Сбросить фильтры
      </button>
    </div>
  );
};
export default SidebarControlButtons;
