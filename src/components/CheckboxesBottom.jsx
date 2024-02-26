import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleCheckbox } from "../features/checkboxes/checkboxesSlice";

const CheckboxesBottom = () => {
  const dispatch = useDispatch();

  const {
    starting,
    lead_academy,
    lead_friday,
    learn_own,
    digital_lit,
    finance_lit,
  } = useSelector((store) => store.checkboxes);
  return (
    <>
      {/* bottom checkbox filters */}
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="starting"
          id="starting"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={starting ? true : false}
        />
        <label htmlFor="starting">Starting</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="lead_academy"
          id="lead_academy"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={lead_academy ? true : false}
        />
        <label htmlFor="lead_academy">Академия лидеров</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="lead_friday"
          id="lead_friday"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={lead_friday ? true : false}
        />
        <label htmlFor="lead_friday">Лидерские пятница</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="learn_own"
          id="learn_own"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={learn_own ? true : false}
        />
        <label htmlFor="learn_own">Учись у своих</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="digital_lit"
          id="digital_lit"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={digital_lit ? true : false}
        />
        <label htmlFor="digital_lit">Цифровая грамотность</label>
      </div>
      <div className="checkbox-input">
        <input
          type="checkbox"
          name="finance_lit"
          id="finance_lit"
          onChange={(e) => dispatch(toggleCheckbox(e.target.name))}
          checked={finance_lit ? true : false}
        />
        <label htmlFor="finance_lit">Финансовая грамостность</label>
      </div>
    </>
  );
};
export default CheckboxesBottom;
