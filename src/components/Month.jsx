import React, { useMemo, useState } from "react";
import Day from "./Day";
import GridLines from "./GridLines";
import dayjs from "dayjs";
import { useGlobalContext } from "../context/GlobalContext";
import { data } from "../data";
import Event from "./Event";

const Month = ({ month }) => {
  return (
    <section className="month-grid">
      <GridLines />
      <div className=" calendar__month">
        {month.map((row, index) => {
          if (
            dayjs(row[0]).week() === dayjs().week() &&
            dayjs(row[0]).year() === dayjs().year()
          ) {
            return (
              <div className={`week highlight`} key={index}>
                <div className="currentWeekDay">
                  {row.map((day, idx) => {
                    return <Day key={idx} day={day} rowIndex={idx} />;
                  })}
                </div>
                <div className="events">
                  {data.map((info) => {
                    return <Event id={info.id} {...info} />;
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div className={"week"} key={index}>
                <div className="currentWeekDay">
                  {row.map((day, idx) => {
                    return <Day key={idx} day={day} rowIndex={idx} />;
                  })}
                </div>
                <div className="events">
                  {data.map((info) => {
                    return <Event id={info.id} {...info} />;
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};
export default Month;
