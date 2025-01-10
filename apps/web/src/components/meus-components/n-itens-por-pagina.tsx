"use client"; // Indicating that this component uses client-side logic
import { useRouter } from "next/navigation";
import React, { JSX } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type NItensPorPaginaProps = {
  valor: number;
};

const items: JSX.Element[] = [];

for (let i = 10; i <= 100; i += 10) {
  items.push(
    <SelectItem key={i} value={i.toString()}>
      {i}
    </SelectItem>,
  );
}

const NItensPorPagina = ({ valor }: NItensPorPaginaProps) => {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    const currentUrl = new URL(window.location.href);

    currentUrl.searchParams.set("envpp", value);

    router.push(currentUrl.toString());
  };

  return (
    <div className="inline-flex flex-wrap items-center">
      <p className="mr-2 items-center">Itens por página:</p>
      <Select defaultValue={valor.toString()} onValueChange={handleValueChange}>
        <SelectTrigger className="w-20">
          <SelectValue placeholder="Choose a number" />
        </SelectTrigger>
        <SelectContent>{items}</SelectContent>
      </Select>
    </div>
  );
};

export default NItensPorPagina;
