import { PostOpDto } from "@repo/types";
import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";
import { fetchPost } from "@/lib/fetch/fetch-post";

export default function useSaveOpContainer(postOp: PostOpDto) {
  const debounceOp = useDebounce(postOp, 1500);

  const [lastSavedData, setLastSavedData] = useState(structuredClone(postOp));

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debounceOp]);

  useEffect(() => {
    async function save() {
      try {
        setIsSaving(true);
        setIsError(false);
        const newData = structuredClone(debounceOp);

        if (newData.PostOp.op.toString() !== "0") {
          console.log("newData", newData);
          await fetchPost(
            "envios/containerOps",
            newData,
            "/dashboard/embarques/novo",
          );
        }
        setLastSavedData(newData);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsSaving(false);
      }
    }

    const hasUnsavedChanges =
      JSON.stringify(debounceOp) !== JSON.stringify(lastSavedData);

    if (hasUnsavedChanges && debounceOp && !isSaving && !isError) {
      save();
    }
  }, [debounceOp, isError, isSaving, lastSavedData]);

  return {
    isSavingOP: isSaving,
    hasUnsavedChangesOp:
      JSON.stringify(postOp) !== JSON.stringify(lastSavedData),
  };
}
