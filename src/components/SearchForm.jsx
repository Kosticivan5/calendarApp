import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  handleSearchBarChange,
  resetSearchBarValue,
} from "../features/Searchbar/searchbarSlice";
import { useMemo, useState } from "react";
import { GrClose } from "react-icons/gr";

import { Form, useLoaderData, Link } from "react-router-dom";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = useMemo(() => {
    let timeoutId;
    return (e) => {
      clearTimeout(timeoutId);
      setValue(e.target.value);
      timeoutId = setTimeout(() => {
        dispatch(handleSearchBarChange(e.target.value));
      }, 1000);
    };
  }, []);

  return (
    <Form className="search-form">
      <div className="search-input-container">
        <CiSearch className="search-icon" />
        <input
          onChange={handleChange}
          type="text"
          name="search-field"
          value={value}
          className="search-form__input"
          placeholder="Поиск внутри календаря"
        />
        <button
          onClick={() => {
            dispatch(resetSearchBarValue(""));
            setValue("");
          }}
          type="button"
          className="search-reset-icon"
        >
          {value.length > 0 && <GrClose />}
        </button>
      </div>
      <button className="search-form__btn" type="submit">
        Найти
      </button>
    </Form>
  );
};
export default SearchForm;
