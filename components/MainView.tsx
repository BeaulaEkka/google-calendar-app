import React from "react";
import Sidebar from "./sidebar/Sidebar";

export default function MainView() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full flex-1">MonthView</div>
    </div>
  );
}
