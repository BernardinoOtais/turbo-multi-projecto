//import { fetchGet } from "@/lib/fetch/fetch-get";

import React from "react";

const Qualidade = async () => {
  //const response = await fetchGet("protected");

  //const user = await getSession();

  //console.log("User", user);
  //console.log("Response", response);
  /*
  if (!response) {
    return <div>{response.statusText} nada</div>;
  }
*/
  console.log("Qaulidade");
  return (
    <div className="flex flex-col">
      <div>{JSON.stringify("response")}</div>;
    </div>
  );
};

export default Qualidade;
