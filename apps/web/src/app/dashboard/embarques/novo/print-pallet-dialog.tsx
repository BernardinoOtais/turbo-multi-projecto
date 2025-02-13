import { ContainerSchemaDto, DestinoEnvioDto } from "@repo/types";
import { Printer } from "lucide-react";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import PrintPalletWrapper from "./print-pallet-wrapper";

type PrintPalletDialogProp = {
  container: ContainerSchemaDto;
  destino: DestinoEnvioDto;
};
/*
"h-[507px] w-[360px]  sm:h-[570px] sm:w-[404px]  md:h-[632px] md:w-[448]  lg:h-[694px] lg:w-[492px]  xl:h-[756px] xl:w-[536px]  2xl:h-[2538px] 2xl:w-[1800px] "

bg-white sm:bg-red-400 md:bg-blue-300 lg:bg-green-200 xl:bg-pink-600 2xl:bg-gray-600
*/
const PrintPalletDialog = ({ container, destino }: PrintPalletDialogProp) => {
  //console.log("Print pallet,  h-[1400px]");
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const reactToPrintFunction = useReactToPrint({
    contentRef,
    documentTitle: "Packing List",
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          title="Imprime Pallet..."
          className="absolute right-2 bottom-2"
        >
          <Printer />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[360px] bg-white sm:w-full sm:bg-red-400 md:bg-blue-300 lg:bg-green-200 xl:bg-pink-600 2xl:bg-gray-600">
        <DialogHeader>
          <DialogTitle>Packing List</DialogTitle>
          <DialogDescription>{`Id: ${container.idContainer}`}</DialogDescription>
        </DialogHeader>

        <PrintPalletWrapper
          contentRef={contentRef}
          container={container}
          destino={destino}
          className="shadow-lg"
        />

        <DialogFooter>
          <Button onClick={() => reactToPrintFunction()}>Imprime</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrintPalletDialog;

//      <AlertDialogContent className="h-[50vw] w-[50vw]">
