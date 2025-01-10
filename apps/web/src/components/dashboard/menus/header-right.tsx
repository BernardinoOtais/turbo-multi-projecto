"use client";
import React from "react";
import FmodaIcon from "./fmoda-icon";
import { ModeToggle } from "@/components/mode-toggle";
import { useSidebar } from "@/components/ui/sidebar-modificada";

const HeaderRight = () => {
  const { openMobile } = useSidebar();

  if (!openMobile) {
    return (
      <div className="flex flex-1 flex-row items-center justify-end">
        <FmodaIcon />
        <ModeToggle />
      </div>
    );
  }
};

export default HeaderRight;
