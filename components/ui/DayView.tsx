import { getWeekDays } from "@/lib/getTime";
import { useDateStore } from "@/lib/store";
import React from "react";

export default function DayView() {
  const { userSelectedDate } = useDateStore();
  return (
    <>
      <div className="grid grid-cols-[auto_auto_1fr] px-4 border">
        <div className="">Time</div>
        <div>
          <div>cc</div>
          <div>vv</div>
        </div>
      </div>
    </>
  );
}
