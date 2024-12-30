"use client";

import { useState, useEffect, useRef } from "react";

export default function AddTime() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("00:00");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const generateTimeIntervals = () => {
    const intervals = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        intervals.push(
          `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`
        );
      }
    }
    return intervals;
  };

  handleTimeSelect=(time:string)

  return (
    <div>
      <h1> Add Time </h1>
    </div>
  );
}
