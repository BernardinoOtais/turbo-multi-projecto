"use client";
import { LogOut } from "lucide-react";
import React from "react";

import { deleteSession } from "@/lib/actions/auth/sessions";

import { DropdownMenuItem } from "../ui/dropdown-menu";

const LogOutBotao = () => {
  return (
    <DropdownMenuItem
      onClick={async () => {
        await deleteSession();
      }}
    >
      <LogOut />
      Log out
    </DropdownMenuItem>
  );
};

export default LogOutBotao;
