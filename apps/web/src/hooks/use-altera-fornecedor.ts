import { PostDestinoSchemaDto } from "@repo/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { insiroFornecedor } from "@/lib/actions/dashboard/embarques/novo";

import useDebounce from "./use-debounce";

export default function useAlteraFornecedor(
  postDestinoSchemaDto: PostDestinoSchemaDto,
) {
  const debounceDestino = useDebounce(postDestinoSchemaDto, 500);

  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(postDestinoSchemaDto),
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debounceDestino]);

  useEffect(() => {
    async function save() {
      setIsSaving(true);
      setIsError(false);
      const newData = structuredClone(debounceDestino);

      insiroFornecedor(newData)
        .then(resultado => {
          if (!resultado.success)
            toast.error(
              `Erro ao inserir fornecedor no envio: ${postDestinoSchemaDto.idEnvio}`,
              {
                description: resultado.error,
              },
            );

          toast.info(`Fornecedor inserido...`, {
            description: "Sucesso",
          });

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
      JSON.stringify(debounceDestino) !== JSON.stringify(lastSavedData);

    if (hasUnsavedChanges && debounceDestino && !isSaving && !isError) {
      save();
    }
  }, [postDestinoSchemaDto, debounceDestino, isError, isSaving, lastSavedData]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(postDestinoSchemaDto) !== JSON.stringify(lastSavedData),
  };
}
