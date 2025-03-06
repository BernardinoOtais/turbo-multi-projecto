import React from "react";

import { ModeToggle } from "@/components/mode-toggle";

import Login from "./login";

const Signup = () => {
  return (
    <div className="flex w-96 flex-col items-center justify-center rounded-lg p-8 shadow-lg">
      <div className="flex w-full justify-end">
        <ModeToggle />
      </div>
      <div className="bg-image h-[130px] w-full bg-contain bg-center bg-no-repeat" />
      <Login />
    </div>
  );
};

export default Signup;
