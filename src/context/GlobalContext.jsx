import dayjs from "dayjs";
import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  const extractedData = data.map((info) => {
    const { id, start_date, finish_date, name } = info;

    return { id, start_date, finish_date, name };
  });

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        extractedData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
