import { getHours, getWeekDays } from "@/lib/getTime";
import { useDateStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "./scroll-area";

export default function DayView() {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const { userSelectedDate } = useDateStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000); //every minute
    return () => clearInterval(interval);
  }, []);

  const isToday =
    userSelectedDate.format("DD-MM-YY") === dayjs().format("DD-MM-YY");

  return (
    <>
      <div className="grid grid-cols-[auto_auto_1fr] px-4 ">
        <div className="w-16 border-r border-gray-300">Time</div>
        <div className="flex w-16 flex-col items-center">
          <div className={cn("text-xs", isToday && "text-blue-600")}>
            {userSelectedDate.format("ddd")}
          </div>
          <div>{userSelectedDate.format("DD")}</div>
        </div>
        <div></div>
      </div>
      <ScrollArea className="h-[70vh]  ">
        <div className="grid grid-cols-[auto_1fr]">
          {/* Left Column */}
          <div className="w-16">
            {getHours.map((hour, index) => (
              <div
                key={index}
                className="border-r border-gray-300 px-4 py-4 relative h-16"
              >
                <div className="absolute top-2">{hour.format("hh:mm")}</div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="">
            {getHours.map((hour, index) => (
              <div
                key={index}
                className="relative flex h-16 cursor-pointer items-center gap-y-2 border-b border-gray-300 hover:bg-gray-100"
              ></div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
