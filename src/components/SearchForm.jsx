import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSearchBarChange,
  resetSearchBarValue,
} from "../features/Searchbar/searchbarSlice";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import useHandleFilteredEvents from "./HandleFilteredEvents";
import { useLocation } from "react-router-dom";
import { isSubmitted } from "../features/sidebar/sidebarSlice";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { submitted } = useSelector((store) => store.sidebar);
  const { searchValue } = useSelector((store) => store.searchBarFilter);

  const filteredLogic = useHandleFilteredEvents(submitted, searchValue);

  useEffect(() => {
    filteredLogic();
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isSubmitted(true));
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-input-container">
        <CiSearch className="search-icon" />
        <input
          onChange={(e) => dispatch(handleSearchBarChange(e.target.value))}
          type="text"
          name="name"
          value={searchValue}
          className="search-form__input"
          placeholder="Поиск внутри календаря"
          autoComplete="off"
        />
        {searchValue.trim() !== "" && (
          <button
            type="button"
            onClick={() => {
              // setValue("");
              if (location.search === "") {
                dispatch(resetSearchBarValue(""));
              } else {
                dispatch(resetSearchBarValue(""));
                dispatch(isSubmitted(true));
              }
            }}
            className="search-reset-icon"
          >
            <GrClose />
          </button>
        )}
      </div>
      <button className="search-form__btn" type="submit">
        Найти
      </button>
    </form>
  );
};
export default SearchForm;
