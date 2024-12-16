import React from "react";
import { Button } from "../ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CreateButton from "./CreateButton";
import SidebarCalendar from "./SidebarCalendar";
import SearchUser from "./SearchUser";

export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <CreateButton />
      <SidebarCalendar /> <SearchUser/>
    </div>
  );
}
