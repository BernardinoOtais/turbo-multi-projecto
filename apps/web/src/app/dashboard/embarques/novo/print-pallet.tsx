import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import { Printer } from "lucide-react";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import ConteudoAImprimir from "./conteudo-a-imprimir";

type PrintPalletProp = {
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
  altura: number;
};
const PrintPallet = ({ container, destino, altura }: PrintPalletProp) => {
  //console.log("Print pallet,  h-[1400px]");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const reactToPrintFunction = useReactToPrint({
    contentRef,
    documentTitle: "Packing List",
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="icon"
          title="Imprime Pallet..."
          className="absolute right-2 bottom-2"
        >
          <Printer />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="h-80 w-90 bg-white sm:h-96 sm:w-[404px] sm:bg-red-400 md:h-[500px] md:bg-blue-300 lg:h-[800px] lg:w-[1000px] lg:bg-green-200 xl:bg-pink-600 2xl:bg-gray-600">
        <AlertDialogHeader>
          <AlertDialogTitle>Packing List</AlertDialogTitle>
          <AlertDialogDescription>{`Id: ${container.idContainer}`}</AlertDialogDescription>
        </AlertDialogHeader>
        <div className={cn("overflow-y-auto shadow-md")}>
          <ConteudoAImprimir
            contentRef={contentRef}
            container={container}
            destino={destino}
            altura={altura}
          />
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
          <Button onClick={() => reactToPrintFunction()}>Imprime</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PrintPallet;

//      <AlertDialogContent className="h-[50vw] w-[50vw]">
