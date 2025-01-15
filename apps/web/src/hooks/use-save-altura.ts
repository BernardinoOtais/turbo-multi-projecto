import { PostAlturaDto } from "@repo/types";
import useDebounce from "./use-debounce";
import { useEffect, useState } from "react";
import { fetchPost } from "@/lib/fetch/fetch-post";

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
      try {
        setIsSaving(true);
        setIsError(false);
        const newData = structuredClone(debounceAltura);

        if (newData.PostAltura.id === 5) console.log("escrevo", newData);
        //função escrever

        const dadosPost = await fetchPost("envios/containerAltura", newData);
        console.log("dadosPost::::", dadosPost);

        setLastSavedData(newData);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsSaving(false);
      }
    }

    const hasUnsavedChanges =
      JSON.stringify(debounceAltura) !== JSON.stringify(lastSavedData);

    if (hasUnsavedChanges && debounceAltura && !isSaving && !isError) {
      save();
    }
  }, [debounceAltura, isError, isSaving, lastSavedData]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(alturaSchema) !== JSON.stringify(lastSavedData),
  };
}
