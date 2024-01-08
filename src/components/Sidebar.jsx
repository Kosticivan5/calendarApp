const Sidebar = () => {
  return (
    <aside className="sidebar">
      <form className="sidebar__form">
        {/* top checkbox filters */}
        <div className="checkbox-input">
          <input type="checkbox" name="" id="mine" />
          <label htmlFor="mine">Я записан</label>
        </div>
        <div className="checkbox-input">
          <input type="checkbox" name="" id="managers" />
          <label htmlFor="managers">Для руководителей</label>
        </div>

        {/* select filters */}
        <div className="select-input">
          <select name="" id="">
            <option value="">Формат</option>
            <option value="">Дистанционно</option>
            <option value="">Очно</option>
          </select>
          <select name="" id="">
            <option value="">Направление</option>
            <option value="">Персональная эффективность</option>
            <option value="">Лидерские навыки</option>
            <option value="">Digital & IT</option>
            <option value="">Проектные и продуктовые технологии</option>
            <option value="">Банки и финансы</option>
            <option value="">Клиентоцентричность</option>
          </select>
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
          <button>Показать</button>
          <button>Сбросить фильтры</button>
        </div>
      </form>
    </aside>
  );
};
export default Sidebar;
