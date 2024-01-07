import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  return (
    <form className="search-form">
      <CiSearch className="search-icon" />
      <input
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
