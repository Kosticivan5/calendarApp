import dayjs from "dayjs";
import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import { getMonth } from "../utils";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  // ===========================new========
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  // const { monthIndex, setMonthIndex } = useGlobalContext();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  // ===========================new========

  const extractedData = data.map((info) => {
    const { id, start_date, finish_date, name } = info;

    return { id, start_date, finish_date, name };
  });

  // const eventList = currentMonth.map((weeks, index) => {
  //   weeks.filter((day) => {});
  // });

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        extractedData,
        currentMonth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
