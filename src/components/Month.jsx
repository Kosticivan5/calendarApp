import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <section style={{ background: "#fff" }}>
      <div className=" calendar__month">
        {month.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.map((day, idx) => {
                return <Day key={idx} day={day} rowIndex={idx} />;
              })}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
export default Month;
