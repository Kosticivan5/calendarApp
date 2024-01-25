import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchBarEvents } from "../features/Searchbar/searchbarSlice";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";

const SearchForm = () => {
  const { register, handleSubmit, formState, reset, submittedData } = useForm({
    defaultValues: { searchBarValue: "" },
  });
  const dispatch = useDispatch();
  const { calendarEvents } = useSelector((store) => store.calendar);

  const onSubmit = (data) => {
    if (data.searchBarValue === "") {
      dispatch(handleSearchBarEvents(calendarEvents));
      return;
    }

    const filteredEvents = calendarEvents.filter(
      (event) =>
        !event.name.toLowerCase().includes(data.searchBarValue.toLowerCase())
    );
    console.log(filteredEvents);
    dispatch(handleSearchBarEvents(filteredEvents));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ searchBarValue: "" });
    }
  }, [formState, submittedData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <div className="search-input-container">
        <CiSearch className="search-icon" />
        <input
          {...register("searchBarValue")}
          type="text"
          className="search-form__input"
          placeholder="Поиск внутри календаря"
        />
        <button className="search-reset-icon">
          <GrClose />
        </button>
      </div>
      <button className="search-form__btn" type="submit">
        Найти
      </button>
    </form>
  );
};
export default SearchForm;
