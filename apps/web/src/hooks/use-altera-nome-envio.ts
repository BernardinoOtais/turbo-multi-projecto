import { PostNomeEnviochemaDto } from "@repo/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useDebounce from "./use-debounce";
import { alteroNomeDoENvio } from "@/lib/actions/dashboard/embarques";

export default function useAlteraNomeEnvio(
  postNomeEnviochemaDto: PostNomeEnviochemaDto,
) {
  const debounceNomeEnvio = useDebounce(postNomeEnviochemaDto, 1500);

  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(postNomeEnviochemaDto),
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debounceNomeEnvio]);

  useEffect(() => {
    async function save() {
      setIsSaving(true);
      setIsError(false);
      const newData = structuredClone(debounceNomeEnvio);

      alteroNomeDoENvio(newData)
        .then(resultado => {
          if (!resultado.success)
            toast.error(
              `Erro alterar o nome do envio: ${postNomeEnviochemaDto.idEnvio}`,
              {
                description: resultado.error,
              },
            );

          console.log(resultado);
          if (resultado.success)
            toast.info(`Nome do envio alterado...`, {
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
      JSON.stringify(debounceNomeEnvio) !== JSON.stringify(lastSavedData);

    if (hasUnsavedChanges && debounceNomeEnvio && !isSaving && !isError) {
      save();
    }
  }, [
    postNomeEnviochemaDto,
    debounceNomeEnvio,
    isError,
    isSaving,
    lastSavedData,
  ]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(postNomeEnviochemaDto) !== JSON.stringify(lastSavedData),
  };
}
