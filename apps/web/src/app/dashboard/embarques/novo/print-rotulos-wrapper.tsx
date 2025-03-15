import { ContainerSchemaDto } from "@repo/types";
import React, { useRef } from "react";

import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";

import PrintRotulosConteudo from "./print-rotulos-conteudo";

type PrintRotulosWrapperProps = {
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
  container: ContainerSchemaDto;
};

export default function PrintRotulosWrapper({
  contentRef,
  className,
  container,
}: PrintRotulosWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useDimensions(containerRef);
  console.log("PrintRotulosWrapper", (1 / 377) * width);

  console.log("PrintRotulosWrapper largura", width);
  return (
    <div
      className={cn(
        "aspect-[150/100] h-fit w-full overflow-y-auto bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-1 p-1", !width && "invisible")}
        style={{
          zoom: (1 / 578) * width,
        }}
        ref={contentRef}
        id="resumePreviewRotulosContent"
      >
        <PrintRotulosConteudo container={container} />
      </div>
    </div>
  );
}
//3h53.06
//https://www.unitconverters.net/typography-converter.html
//378
