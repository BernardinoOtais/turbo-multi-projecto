import { PostAlturaDto } from "@repo/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { insiroAltura } from "@/lib/actions/dashboard/embarques/novo";

import useDebounce from "./use-debounce";

export default function useSaveAltura(alturaSchema: PostAlturaDto) {
  const debounceAltura = useDebounce(alturaSchema, 1500);

  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(alturaSchema),
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debounceAltura]);

  useEffect(() => {
    async function save() {
      setIsSaving(true);
      setIsError(false);
      const newData = structuredClone(debounceAltura);

      insiroAltura(newData)
        .then(resultado => {
          if (!resultado.success)
            toast.error(
              `Erro ao inserir altura na Pallet: ${alturaSchema.PostAltura.id}`,
              {
                description: resultado.error,
              },
            );

          toast.info(
            `Altura de ${alturaSchema.PostAltura.altura} Mt inserida na Pallet: ${alturaSchema.PostAltura.id}`,
            {
              description: "Sucesso",
            },
          );

          setLastSavedData(newData);
        })
        .catch(error => {
          console.error(error);
          setIsError(true);
          console.error(error);
        })
        .finally(() => setIsSaving(false));
    }

    const hasUnsavedChanges =
      JSON.stringify(debounceAltura) !== JSON.stringify(lastSavedData);

    if (hasUnsavedChanges && debounceAltura && !isSaving && !isError) {
      save();
    }
  }, [alturaSchema, debounceAltura, isError, isSaving, lastSavedData]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(alturaSchema) !== JSON.stringify(lastSavedData),
  };
}
