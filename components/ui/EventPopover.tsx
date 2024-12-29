"use client";
import React, { useRef } from "react";

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

  handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <div className="w-full h-full bg-black/20">
      <div className="w-[20%] h-[60%] bg-white rounded-md "></div>
    </div>
  );
}
