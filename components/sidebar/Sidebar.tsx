import React from "react";
import CreateButton from "./CreateButton";
import SidebarCalendar from "./SidebarCalendar";
import SearchUser from "./SearchUser";
import MyCalendar from "./MyCalendar";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-5">
      <CreateButton />
      <SidebarCalendar /> <SearchUser />
      <MyCalendar />
    </div>
  );
}
