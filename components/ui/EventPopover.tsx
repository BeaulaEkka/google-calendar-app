"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./button";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface EventPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  date: string;
}
export default function EventPopover({
  isOpen,
  onClose,
  date,
}: EventPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <div className="w-full h-full bg-black/20" onClick={handleClose}>
      <div
        className="w-[20%] h-[60%] bg-white rounded-md "
        ref={popoverRef}
        onClick={handlePopoverClick}
      >
        <div className="mb-2 flex items-center justify-between rounded-md bg-slate-100">
          <HiOutlineMenuAlt4 />
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <IoCloseSharp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
