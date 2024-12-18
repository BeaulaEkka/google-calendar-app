"use client";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MonthView from "./MonthView";
import { useViewStore } from "@/lib/store";
import WeekView from "./ui/WeekView";
import DayView from "./ui/DayView";

export default function MainView() {
  const { selectedView } = useViewStore();
  
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full flex-1">
        {selectedView === "month" && <MonthView />}
        {selectedView === "week" && <WeekView />}
        {selectedView === "day" && <DayView />}
      </div>
    </div>
  );
}
