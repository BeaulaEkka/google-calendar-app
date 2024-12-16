import React from "react";
import { Input } from "@/components/ui/input";
import { HiOutlineUsers } from "react-icons/hi";

export default function SearchUser() {
  return (
    <div>
      <HiOutlineUsers />
      <Input
        placeholder="Search for people"
        type="search"
        className="w-full rounded-lg pl-7 bg-slate-100 placeholder:text-slate-400"
      />
    </div>
  );
}
