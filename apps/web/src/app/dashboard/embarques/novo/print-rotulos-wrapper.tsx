import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import React, { useRef } from "react";

import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";

import PrintRotulosConteudo from "./print-rotulos-conteudo";

type PrintRotulosWrapperProps = {
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
};

export default function PrintRotulosWrapper({
  contentRef,
  className,
  container,
  destino,
}: PrintRotulosWrapperProps) {
  const containerRef: React.RefObject<HTMLDivElement | null> = useRef(null);
  const { width } = useDimensions(containerRef);
  // console.log("width: ", width);
  return (
    <div
      className={cn(
        "aspect-[100/150] h-fit w-full overflow-y-auto bg-white text-black",
        className,
      )}
      ref={containerRef}
      id="resumePreviewRotulosContent"
    >
      <div
        className={cn("space-y-1 p-1", !width && "invisible")}
        style={{
          zoom: (1 / 378) * width,
        }}
        ref={contentRef}
      >
        <PrintRotulosConteudo container={container} destino={destino} />
      </div>
    </div>
  );
}
//3h53.06
//https://www.unitconverters.net/typography-converter.html
