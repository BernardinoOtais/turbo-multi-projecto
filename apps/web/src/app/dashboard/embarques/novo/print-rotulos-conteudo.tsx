import { ContainerSchemaDto, ConteudoDto } from "@repo/types";
import Image from "next/image";
import React from "react";

type PrintRotulosConteudoProps = {
  container: ContainerSchemaDto;
};

const PrintRotulosConteudo = ({ container }: PrintRotulosConteudoProps) => {
  const { idTipoContainer, other_Container } = container;

  if (![3, 4].includes(idTipoContainer) || !other_Container) return null;

  return (
    <>
      {idTipoContainer === 3
        ? other_Container.map(c =>
            c.other_Container?.map(cc => (
              <div
                key={cc.idContainer}
                className="flex flex-col"
                style={{ pageBreakAfter: "always" }}
              >
                <RotuloCaixa
                  conteudo={cc.Conteudo}
                  numero={cc.nContainer}
                  totalVolumes={c.other_Container?.length}
                />
              </div>
            )),
          )
        : other_Container.map(c => (
            <div
              key={c.idContainer}
              className="flex flex-col"
              style={{ pageBreakAfter: "always" }}
            >
              <RotuloCaixa
                conteudo={c.Conteudo}
                numero={c.nContainer}
                totalVolumes={other_Container.length}
              />
            </div>
          ))}
    </>
  );
};

export default PrintRotulosConteudo;

type RotuloCaixaProps = {
  conteudo: ConteudoDto[] | undefined;
  numero: number;
  totalVolumes: number | undefined;
};

const RotuloCaixa = ({ conteudo, totalVolumes, numero }: RotuloCaixaProps) => {
  if (!conteudo) return;

  return (
    <>
      <div className="flex flex-row pb-1">
        <Image
          src={"/assets/fmoda-print.svg"}
          alt="Logo"
          width={534} // Use the actual width of your image
          height={149} // Use the actual height of your image
          className="h-[35px] w-[126px] object-contain"
        />
        <p className="mx-auto my-auto">FMODA INÚSTRIA TÊXTIL S.A.</p>
      </div>

      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-1 whitespace-nowrap">
              Commande
            </th>
            <th className="border border-gray-200 px-1 whitespace-nowrap">
              Reférence
            </th>
            <th className="border border-gray-200 px-1 whitespace-nowrap">
              Couleur
            </th>
            <th className="w-full border border-gray-200 px-1 whitespace-nowrap">
              Contenu
            </th>
            <th className="border border-gray-200 px-1 whitespace-nowrap">
              Quantité
            </th>
            <th className="border border-gray-200 px-1 whitespace-nowrap">
              Unités
            </th>
          </tr>
        </thead>
        <tbody>
          {conteudo?.map(con => (
            <tr key={con.idConteudo}>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {con.op}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {con.Op.modelo}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {con.Op.cor}
              </td>
              <td className="border border-gray-200 px-1 text-start whitespace-nowrap">
                {`${con.Item.ItemTraduzido.length > 0 ? con.Item.ItemTraduzido[0].descItem : con.Item.Descricao}${con.tam === "nt" ? "" : "-" + con.tam}`}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {con.qtt}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {con.Unidades.Item?.ItemTraduzido &&
                con.Unidades.Item.ItemTraduzido.length > 0
                  ? con.Unidades.Item.ItemTraduzido[0].descItem
                  : con.Unidades.descricaoUnidade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row">
        <p className="ml-auto">
          {`Volume ${numero}/${totalVolumes} ${`Pallet: ${numero}`}`}
        </p>
        <p> </p>
      </div>
    </>
  );
};
