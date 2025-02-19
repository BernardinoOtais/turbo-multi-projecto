"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type SwitchFechadoProps = {
  fechado: boolean;
};

const SwitchFechado = ({ fechado }: SwitchFechadoProps) => {
  const [fechadoValor, setFechadoValor] = useState(fechado);
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname
  const searchParams = useSearchParams(); // Get current search params

  // Update URL when 'fechado' value changes
  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("fechado", String(fechadoValor)); // Update 'fechado' in query params

    router.push(`${pathname}?${query.toString()}`); // Update the URL without a full reload
  }, [fechadoValor, pathname, searchParams, router]);

  return (
    <>
      <Switch
        id="envio-fechado"
        value={fechadoValor ? "true" : "false"}
        onCheckedChange={() => setFechadoValor(prev => !prev)} // Toggle the 'fechadoValor' state
        className="ml-auto"
      />
      <Label className="mr-auto">Envios fechados</Label>
    </>
  );
};

export default SwitchFechado;
