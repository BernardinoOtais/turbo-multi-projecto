import { ContainerSchemaDto } from "@repo/types";
import React from "react";

type PackingListConteudoProps = {
  containerAImprimir: ContainerSchemaDto[] | undefined;
  numeroPai: number;
};
const PackingListConteudo = ({
  containerAImprimir,
  numeroPai,
}: PackingListConteudoProps) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200 text-[9px]">
      <caption className="p-2 text-left">Packing List:</caption>
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            PALLET
          </th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">Ref</th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            couleur
          </th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            Talle
          </th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            Nº Commande
          </th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            Nº Client
          </th>
          <th className="w-full border border-gray-200 px-1">Description</th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            Quantité
          </th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            Unités
          </th>
          <th className="border border-gray-200 px-1 whitespace-nowrap">
            Volume
          </th>
        </tr>
      </thead>
      <tbody>
        {containerAImprimir?.map(con =>
          (con.Conteudo ?? []).map(c => (
            <tr key={c.idConteudo}>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {numeroPai}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {c.Op.modelo}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {c.Op.cor}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {c.tam}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {c.Op.op}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {c.Op.pedido}
              </td>
              <td className="w-full border border-gray-200 px-1">
                {c.Item.ItemTraduzido.length > 0
                  ? c.Item.ItemTraduzido[0].descItem
                  : c.Item.Descricao}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {c.qtt}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {c.Unidades.Item?.ItemTraduzido &&
                c.Unidades.Item.ItemTraduzido.length > 0
                  ? c.Unidades.Item.ItemTraduzido[0].descItem
                  : c.Unidades.descricaoUnidade}
              </td>
              <td className="border border-gray-200 px-1 text-center whitespace-nowrap">
                {con.nContainer}
              </td>
            </tr>
          )),
        )}
      </tbody>
    </table>
  );
};

export default PackingListConteudo;
