import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchBarEvents } from "../features/Searchbar/searchbarSlice";

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { calendarEvents } = useSelector((store) => store.calendar);

  const onSubmit = (data) => {
    if (data.searchBarValue === "") {
      dispatch(handleSearchBarEvents(calendarEvents));
    }

    const filteredEvents = calendarEvents.filter((event) =>
      event.name.toLowerCase().includes(data.searchBarValue.toLowerCase())
    );
    dispatch(handleSearchBarEvents(filteredEvents));
    data.searchBarValue = "";
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <CiSearch className="search-icon" />
      <input
        {...register("searchBarValue")}
        type="text"
        className="search-form__input"
        placeholder="Поиск внутри календаря"
      />
      <button className="search-form__btn" type="submit">
        Найти
      </button>
    </form>
  );
};
export default SearchForm;
