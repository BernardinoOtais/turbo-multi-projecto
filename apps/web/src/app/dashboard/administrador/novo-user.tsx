import React from "react";

import NovoUserForm from "./novo-user-form";

type NovoUserProps = {
  papeisKeyValue: {
    value: string;
    label: string;
  }[];
};
const NovoUser = async ({ papeisKeyValue }: NovoUserProps) => {
  return <NovoUserForm papeisKeyValue={papeisKeyValue} />;
};

export default NovoUser;
