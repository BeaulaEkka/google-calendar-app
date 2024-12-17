import dayjs from "dayjs";
import React from "react";

export default function MonthViewBox({
  day,
  rowIndex,
}: {
  day: dayjs.Dayjs | null;
  rowIndex: number;
}) {
  return (
    <div className='cn("group relative flex flex-col items-center gap-y-2 border","transition-all hover:bg-violet-50" )'>
      <div className="flex flex-col items-center">{}</div>
    </div>
  );
}
