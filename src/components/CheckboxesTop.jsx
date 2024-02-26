import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleCheckbox } from "../features/checkboxes/checkboxesSlice";

const CheckboxesTop = () => {
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

  return (
    <>
      {/* top checkbox filters */}
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="registred"
          id="mine"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={registred ? true : false}
        />
        <label htmlFor="mine">Я записан</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="for_type"
          id="managers"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={for_type ? true : false}
        />
        <label htmlFor="managers">Для руководителей</label>
      </div>
    </>
  );
};
export default CheckboxesTop;
