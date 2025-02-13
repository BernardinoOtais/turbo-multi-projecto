import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import React, { useRef } from "react";

import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";

import PrintPalletConteudo from "./print-pallet-conteudo";

type PrintPalletWrapperProps = {
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
};

export default function PrintPalletWrapper({
  contentRef,
  className,
  container,
  destino,
}: PrintPalletWrapperProps) {
  const containerRef: React.RefObject<HTMLDivElement | null> = useRef(null);
  const { width } = useDimensions(containerRef);

  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full overflow-y-auto bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        <PrintPalletConteudo container={container} destino={destino} />
      </div>
    </div>
  );
}
