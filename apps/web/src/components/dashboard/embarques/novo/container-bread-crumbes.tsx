import Link from "next/link";
import React, { Fragment } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb-modificada";

type DadosBreadCrumbProps = {
  crumbs: EmbarqueBreadCrumbContainers[];
  niveisValidados: number[];
  nIdEnvio: number;
};

const ContainerBreadCrumbs = ({
  niveisValidados,
  crumbs,
  nIdEnvio,
}: DadosBreadCrumbProps) => {
  const tamanhoDaLista = crumbs.length;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => {
          const listaFiltrada = niveisValidados.filter(
            select => select <= crumb.id,
          );
          const tamanhoDaListaFiltrada = listaFiltrada.length;

          const isDisabled = tamanhoDaLista - 1 === index;
          const isLast = tamanhoDaLista === index + 1;
          const naoELink = tamanhoDaLista != 1 && isDisabled;
          return (
            <Fragment key={crumb.id}>
              <BreadcrumbItem>
                {naoELink ? (
                  <BreadcrumbPage className="group relative">
                    <span>{`${crumb.nome} nº ${crumb.numero}`}</span>
                    <Badge className="absolute top-[-18px] right-[-20px] h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                      {crumb.badge}
                    </Badge>
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild className="group relative mr-2">
                    <Link
                      href={{
                        pathname: "/dashboard/embarques/novo",
                        query: {
                          idEnvio: nIdEnvio,
                          nivel:
                            tamanhoDaListaFiltrada === tamanhoDaLista &&
                            tamanhoDaLista === 1
                              ? []
                              : listaFiltrada,
                        },
                      }}
                    >
                      <span>{`${crumb.nome} nº ${crumb.numero}`}</span>
                      <Badge className="absolute top-[-18px] right-[-20px] h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                        {crumb.badge}
                      </Badge>
                      <Badge
                        variant="destructive"
                        className="absolute top-[-18px] right-[-20px] hidden h-5 w-5 items-center justify-center rounded-full text-xs font-bold group-hover:flex"
                      >
                        {"x"}
                      </Badge>
                      {/* Hover Badge */}
                    </Link>
                  </BreadcrumbLink>
                )}
                {!isLast && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ContainerBreadCrumbs;
