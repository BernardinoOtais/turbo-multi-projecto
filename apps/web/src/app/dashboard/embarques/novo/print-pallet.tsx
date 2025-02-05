import { Copy, Printer } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PrintPallet = () => {
  console.log("Print pallet");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          title="Imprime Pallet..."
          className="absolute right-2 bottom-2"
        >
          <Printer />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrintPallet;
//<Printer name="Imprime Pallet..." />;

/*
    <Button
      size="icon"
      disabled={apagaCardEstado}
      onClick={() => apagaContainerFun()}
      className={cn(
        "relative flex items-center justify-center", // Default classes
        className, // Merge with custom classes
      )}
      title="Apaga Container"
    >
      {apagaCardEstado && <Loader2 className="absolute animate-spin" />}
      {!apagaCardEstado && <Trash2 />}
    </Button>
*/
