import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import React from "react";

import PackingListUmaPallet from "@/components/meus-components/packing-list-uma-pallet";

type PrintPalletConteudoProps = {
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
};

const PrintPalletConteudo = ({
  container,
  destino,
}: PrintPalletConteudoProps) => {
  const { idTipoContainer, other_Container, altura } = container;

  if (![3, 4].includes(idTipoContainer) || !other_Container) return null;

  return (
    <>
      {idTipoContainer === 3 ? (
        other_Container.map(c => (
          <PackingListUmaPallet
            key={c.idContainer}
            container={c}
            destino={destino}
            altura={altura}
          />
        ))
      ) : (
        <PackingListUmaPallet
          container={container}
          destino={destino}
          altura={altura}
        />
      )}
    </>
  );
};

export default PrintPalletConteudo;
