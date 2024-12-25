"use client";
import { getHours, getWeekDays } from "@/lib/getTime";
import { useDateStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";

export default function WeekView() {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const { userSelectedDate } = useDateStore();
  // const Days = getWeekDays(userSelectedDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000); //every minute
    return () => clearInterval(interval);
  }, []);

  // console.log(getHours);
  // console.log("getweekdaya:", getWeekDays(userSelectedDate));

  return (
    <>
      <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr] place-items-center px-4 ">
        <div className="w-16 border-r border-gray-300">
          <div className="relative h-16">
            <div className="absolute top-[40%] text-xs text-gray-600">Mon</div>
          </div>
        </div>
        {/**weekview */}
        {getWeekDays(userSelectedDate).map(({ currentDate, today }, index) => (
          <div className="flex flex-col" key={index}>
            <div className={cn("text-xs", today && "text-blue-600")}>
              {currentDate.format("ddd")}
            </div>
            <div
              className={cn("text-lg", today && "text-blue-600")}
              key={index}
            >
              {currentDate.format("DD")}
            </div>
          </div>
        ))}
      </div>
      {/* Time column $ corresponding Bodes of time per date */}
      <ScrollArea className="h-[80vh] border border-green-500">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr] px-4 py-3">
          {/* Time column */}
          <div className="w-16 border-r border-gray-300">
            {getHours.map((hour, index) => (
              <div key={index} className="relative h-16 text-sm text-gray-600">
                <div>{hour.format("hh:mm")}</div>
              </div>
            ))}
          </div>
          {/* weekdays and corresponding boxes */}
          {getWeekDays(userSelectedDate).map(
            ({ isCurrentDay, today }, index) => {
              const dayDate = userSelectedDate
                .startOf("week")
                .add(index, "day");
              return (
                <div
                  key={index}
                  className="relative border-r   border-gray-300"
                >
                  {getHours.map((hour, i) => (
                    <div
                      key={i}
                      className="relative flex h-16 cursor-pointer flex-col items-center gap-y-2 border-b border-gray-300 hover:bg-gray-100"
                    ></div>
                  ))}
                  {/* time indicator */}
                  {isCurrentDay && today && (
                    <div
                      className={cn("absolute h-0.5 w-full bg-red-500")}
                      style={{ top: `${(currentTime.hour() / 24) * 100}%` }}
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </ScrollArea>
    </>
  );
}
