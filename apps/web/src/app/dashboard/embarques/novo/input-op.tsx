import { zodResolver } from "@hookform/resolvers/zod";
import { PostOpDto, PostOpSchema } from "@repo/types";
import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type InputOpProps = {
  isSaving: boolean;
  idContainer: number;
  setScroll: (data: boolean) => void;
  setOp: (data: PostOpDto) => void;
  op: PostOpDto;
};
const InputOp = ({
  isSaving,
  idContainer,
  setScroll,
  setOp,
  op,
}: InputOpProps) => {
  const form = useForm<PostOpDto>({
    resolver: zodResolver(PostOpSchema),
    defaultValues: {
      PostOp: {
        id: idContainer,
        op: op.PostOp.op,
      },
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      const isValid = await form.trigger();

      if (!isValid) return;

      setScroll(false);
      setOp({
        PostOp: {
          id: idContainer,
          op: values.PostOp?.op || 0,
        },
      });
    });

    return unsubscribe;
  }, [form, idContainer, setOp, setScroll]);

  //console.log("InputOp: ", op);
  return (
    <Form {...form}>
      <form>
        <div className="relative">
          {isSaving && (
            <div className="bg-opacity-50 absolute inset-0 z-10 flex items-center justify-center bg-white">
              <Loader2 className="animate-spin" />
            </div>
          )}
          <FormField
            control={form.control}
            name="PostOp.op"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex flex-col items-center justify-start">
                  <FormLabel className="sr-only">
                    Op a inserir nesta Pallet
                  </FormLabel>
                  <span>Op</span>
                  <FormControl>
                    <Input
                      className="w-16 text-center"
                      {...field}
                      value={op.PostOp.op == 0 ? "" : op.PostOp.op} // Display nothing if the value is 0
                      placeholder="..."
                      disabled={isSaving}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default InputOp;
