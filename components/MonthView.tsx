"use client";
import { getMonth } from "@/lib/getTime";
import React, { Fragment } from "react";
import MonthViewBox from "./MonthViewBox";

export default function MonthView() {
  const currentMonth = getMonth();

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
