import { getSession } from "@/lib/actions/auth/sessions";
import { redirect } from "next/navigation";
import React from "react";
import { NavUser } from "./nav-user-modificado";

const NavUserPai = async () => {
  const utilizadorActual = await getSession();

  if (!utilizadorActual) return redirect("/");
  //await espera(3);
  return (
    <NavUser
      name={utilizadorActual.name}
      apelido={utilizadorActual.apelido}
      email={utilizadorActual.email}
      avatar={""}
    />
  );
};

export default NavUserPai;
