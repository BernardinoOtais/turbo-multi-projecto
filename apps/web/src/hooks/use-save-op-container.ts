import { PostOpDto } from "@repo/types";
import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";
import { insiroOpEmContainer } from "@/lib/actions/dashboard/embarques/novo";
import { toast } from "sonner";

export default function useSaveOpContainer(
  postOp: PostOpDto,
  setOp: (data: PostOpDto) => void,
) {
  const debounceOp = useDebounce(postOp, 1500);

  const [lastSavedData, setLastSavedData] = useState(structuredClone(postOp));

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [debounceOp]);

  useEffect(() => {
    async function save() {
      const valorInicial = structuredClone({
        PostOp: { id: postOp.PostOp.id, op: 0 },
      });
      setIsError(false);
      const newData = structuredClone(debounceOp);

      if (newData.PostOp.op.toString() !== "0")
        insiroOpEmContainer(newData)
          .then(resultado => {
            console.log(resultado?.success);
            if (!resultado.success)
              toast.error(`Erro ao inserir a Op: ${postOp.PostOp.op}`, {
                description: resultado.error,
              });
            else
              toast.info(
                `Op ${postOp.PostOp.op} inserida na Pallet: ${postOp.PostOp.id}`,
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
          .finally(() => {
            setIsSaving(false);
            console.log("useSaveOpContainer, finaly: ", "finaly");
            setOp(valorInicial);
          });
    }
    const valorInicial = structuredClone({
      PostOp: { id: postOp.PostOp.id, op: 0 },
    });

    const hasUnsavedChanges =
      JSON.stringify(debounceOp) !== JSON.stringify(lastSavedData) &&
      JSON.stringify(debounceOp) !== JSON.stringify(valorInicial);

    if (hasUnsavedChanges && debounceOp && !isSaving && !isError) {
      save();
    }
  }, [debounceOp, isError, isSaving, lastSavedData, postOp, setOp]);

  const valorInicial = structuredClone({
    PostOp: { id: postOp.PostOp.id, op: 0 },
  });
  return {
    isSavingOP: isSaving,
    hasUnsavedChangesOp:
      JSON.stringify(debounceOp) !== JSON.stringify(lastSavedData) &&
      JSON.stringify(debounceOp) !== JSON.stringify(valorInicial),
  };
}

/*
      try {
        setIsSaving(true);
        setIsError(false);
        const newData = structuredClone(debounceOp);

        console.log("useSaveOpContainer, newData: ", newData);

        if (newData.PostOp.op.toString() !== "0") {
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
        console.log("useSaveOpContainer, finaly: ", "finaly");

        setOp(valorInicial);
      }
*/
