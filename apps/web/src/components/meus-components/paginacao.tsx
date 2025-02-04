import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type PaginacaoProps = {
  paginaActual: number;
  totalPaginas: number;
};

const Paginacao = ({ paginaActual, totalPaginas }: PaginacaoProps) => {
  const maxPage = Math.min(totalPaginas, Math.max(paginaActual + 4, 10));
  const minPage = Math.max(1, Math.min(paginaActual - 5, maxPage - 9));

  //console.log("select paginas: ", maxPage, minPage, totalPaginas);

  const renderPages = (minPage: number, maxPage: number) => {
    const pages = [];
    for (let i = minPage; i <= maxPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={`?page=${i}`} isActive={i === paginaActual}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return pages;
  };

  return (
    <>
      <div className="mx-auto hidden justify-between gap-3 lg:flex lg:flex-wrap">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {paginaActual > 1 && (
                <PaginationPrevious href={`?page=${paginaActual - 1}`} />
              )}
            </PaginationItem>
            {minPage > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink href="?page=1">1</PaginationLink>
                </PaginationItem>
                {minPage > 2 && <PaginationEllipsis />}
              </>
            )}
            {renderPages(minPage, maxPage)}
            {maxPage < totalPaginas && (
              <>
                {maxPage < totalPaginas - 1 && <PaginationEllipsis />}
                <PaginationItem>
                  <PaginationLink href={`?page=${totalPaginas}`}>
                    {totalPaginas}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            <PaginationItem>
              {paginaActual < totalPaginas && (
                <PaginationNext href={`?page=${paginaActual + 1}`} />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <div className="mx-auto flex flex-wrap justify-between gap-3 lg:hidden">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {paginaActual != 1 && (
                <PaginationPrevious href={`?page=${paginaActual - 1}`} />
              )}
            </PaginationItem>
            {minPage > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink href="?page=1">1</PaginationLink>
                </PaginationItem>
                {minPage > 2 && <PaginationEllipsis />}
              </>
            )}

            {renderPages(paginaActual, paginaActual)}

            {paginaActual != totalPaginas && (
              <>
                {paginaActual != totalPaginas && <PaginationEllipsis />}
                <PaginationItem>
                  <PaginationLink href={`?page=${totalPaginas}`}>
                    {totalPaginas}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              {paginaActual != totalPaginas && (
                <PaginationNext href={`?page=${paginaActual + 1}`} />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Paginacao;
