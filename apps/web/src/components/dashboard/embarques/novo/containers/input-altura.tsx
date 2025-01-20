import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PostAlturaSchema, PostAlturaDto } from "@repo/types";
import { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

type InputAlturaProps = {
  isSaving: boolean;
  altura: PostAlturaDto;
  setAltura: (data: PostAlturaDto) => void;
  setScroll: (data: boolean) => void;
};

const InputAltura = ({
  isSaving,
  altura,
  setAltura,
  setScroll,
}: InputAlturaProps) => {
  const form = useForm<PostAlturaDto>({
    resolver: zodResolver(PostAlturaSchema),
    defaultValues: altura,
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      const isValid = await form.trigger();
      //console.log("Use effect component: isvalid", isValid);
      if (!isValid) return;
      //values.PostAltura?.altura || altura.PostAltura.altura,
      //console.log("Use effect component:", values);
      setScroll(false);
      setAltura({
        PostAltura: {
          id: altura.PostAltura.id,
          altura: values.PostAltura?.altura || 0,
        },
      });
    });

    return unsubscribe;
  }, [form, setAltura, altura, setScroll]);

  return (
    <Form {...form}>
      <form>
        <div className="relative">
          {isSaving && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-50">
              <Loader2 className="animate-spin" />
            </div>
          )}
          <FormField
            control={form.control}
            name="PostAltura.altura"
            render={({ field }) => (
              <FormItem className="">
                <div className="flex flex-col items-center justify-start">
                  <FormLabel className="sr-only">Altura da Pallet</FormLabel>
                  <span>Altura em Mt</span>
                  <FormControl>
                    <Input
                      className="w-16 text-center"
                      {...field}
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

export default InputAltura;
