import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";

export default function HeaderLeft() {
  // const date=New Date();
  return (
    <div className="flex gap-2 items-center ">
      <section>
        <TbMenu2 className="size-6" />
      </section>
      <section className="flex gap-2 items-center">
        <img src="images/calendar_1_2x.png" alt="date" className="size-12" />
        <p className="font-semibold">Calendar</p>
      </section>
      <Button variant="outline">Button</Button>
      <section className="flex gap-5">
        <IoIosArrowBack className="size-5" />
        <IoIosArrowForward className="size-5" />
        {/**current date button */}
        <section>December 16 2024</section>
      </section>
    </div>
  );
}
