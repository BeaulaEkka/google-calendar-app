"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { useDateStore, useViewStore } from "@/lib/store";
import dayjs from "dayjs";

export default function HeaderLeft() {
  // const date=New Date();
  const todaysDate = dayjs();
  const { userSelectedDate, setDate, setMonth, selectedMonthIndex } =
    useDateStore();
  const { selectedView } = useViewStore();

  const handlePrevClick = () => {
    switch (selectedView) {
      case "month":
        setMonth(selectedMonthIndex - 1);
        break;
      case "week":
        setDate(userSelectedDate.subtract(1, "week"));
        break;
      case "day":
        setDate(userSelectedDate.subtract(1, "day"));
        setMonth(selectedMonthIndex - 1);
        break;
      default:
        break;
    }
  };

  const handleNextClick = () => {
    switch (selectedView) {
      case "month":
        setMonth(selectedMonthIndex + 1);
        break;
      case "week":
        setDate(userSelectedDate.add(1, "week"));
        break;
      case "day":
        setDate(userSelectedDate.add(1, "day"));
        setMonth(selectedMonthIndex + 1);
        break;
      default:
        break;
    }
  };

  const handleTodayClick = () => {
    switch (selectedView) {
      case "month":
        setMonth(dayjs().month());
        break;
      case "week":
        setDate(todaysDate);
        break;
      case "day":
        setDate(todaysDate);
        setMonth(dayjs().month());
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex gap-2 items-center ">
      <section>
        <TbMenu2 className="size-6" />
      </section>
      <section className="flex gap-2 items-center">
        <img src="images/calendar_1_2x.png" alt="date" className="size-12" />
        <p className="font-semibold">Calendar</p>
      </section>
      <Button variant="outline" onClick={handleTodayClick}>
        Today
      </Button>
      <section className="flex gap-5">
        <IoIosArrowBack className="size-5" onClick={handlePrevClick} />
        <IoIosArrowForward className="size-5" onClick={handleNextClick} />
        {/**current date button */}
        <section>
          <h1>
            {dayjs(new Date(dayjs().year(), selectedMonthIndex)).format(
              "MMMM YYYY"
            )}
          </h1>
        </section>
      </section>
    </div>
  );
}
