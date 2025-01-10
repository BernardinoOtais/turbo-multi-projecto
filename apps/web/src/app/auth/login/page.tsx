import React from "react";
import Login from "./login";

const Signup = () => {
  return (
    <div className="flex w-96 flex-col items-center justify-center rounded-lg p-8 shadow-lg">
      <h1 className="mb-4 text-center text-2xl font-bold">Login</h1>
      {/**Register form */}
      <Login />
    </div>
  );
};

export default Signup;
