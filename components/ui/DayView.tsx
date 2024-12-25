

import React, { Fragment } from "react";
// import MonthViewBox from "./MonthViewBox";
import { useDateStore } from "@/lib/store";

export default function DayView() {
  const currentDay = getDay();
  const { twoMonthArray } = useDateStore();

  return (
    <section className="grid grid-cols-7 grid-rows-5 border lg:h-screen">
      {currentMonth.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, index) => (
            // <h3 key={index}>{day.format("D")}</h3>
            <MonthViewBox key={index} day={day} rowIndex={i} />
          ))}
        </Fragment>
      ))}
    </section>
  );
}
