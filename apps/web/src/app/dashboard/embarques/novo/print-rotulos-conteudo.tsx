import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import React from "react";

import PackingListUmaPallet from "@/components/meus-components/packing-list-uma-pallet";

type PrintRotulosConteudoProps = {
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
};

const PrintRotulosConteudo = ({
  container,
  destino,
}: PrintRotulosConteudoProps) => {
  const { idTipoContainer, other_Container, altura } = container;

  if (![3, 4].includes(idTipoContainer) || !other_Container) return null;

  return (
    <>
      {idTipoContainer === 3
        ? other_Container.map(c =>
            c.other_Container?.map(cc => (
              <div
                key={cc.idContainer}
                className=""
                style={{ breakInside: "avoid", display: "block" }}
              >
                <p>{`Palett :${c.nContainer}`}</p>
                <p>{`Caixa :${cc.nContainer}`}</p>
                {cc.Conteudo?.map(cont => (
                  <div key={cont.idConteudo}>{cont.Item.Descricao}</div>
                ))}
              </div>
            )),
          )
        : other_Container.map(c => (
            <div
              key={c.idContainer}
              className=""
              style={{ breakInside: "avoid", display: "block" }}
            >
              <p>{`Palett :${container.nContainer}`}</p>
              <p>{`Caixa :${c.nContainer}`}</p>
              {c.Conteudo?.map(cont => (
                <div key={cont.idConteudo}>{cont.Item.Descricao}</div>
              ))}
            </div>
          ))}
    </>
  );
};

export default PrintRotulosConteudo;
