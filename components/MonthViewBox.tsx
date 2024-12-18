import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import React from "react";

export default function MonthViewBox({
  day,
  rowIndex,
}: {
  day: dayjs.Dayjs | null;
  rowIndex: number;
}) {
  if (!day) {
    return (
      <div className="h-12 w-full border md:h-28 md:w-full lg:h-full"></div>
    );
  }

  const isFirstDayOfMonth = day.date() === 1;

  const isToday = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");

  return (
    <div className='cn("group relative flex flex-col items-center gap-y-2 "," border transition-all hover:bg-violet-50  justify-center" )'>
      <div className="flex flex-col items-center ">
        {rowIndex === 0 && (
          <h4 className="text-xs text-gray-500">
            {day?.format("ddd").toUpperCase()}
          </h4>
        )}

        <h4
          className={cn(
            "text-sm text-gray-500 font-semibold flex",
            isToday && "flex h-8 w-8 justify-center rounded-full bg-blue-500"
          )}
        >
          {isFirstDayOfMonth ? day.format("D MMM ") : day.format("D")}
        </h4>
      </div>
    </div>
  );
}
