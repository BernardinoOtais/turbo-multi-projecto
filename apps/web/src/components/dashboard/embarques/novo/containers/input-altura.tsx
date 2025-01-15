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

type InputAlturaProps = {
  altura: PostAlturaDto;
  setAltura: (data: PostAlturaDto) => void;
  setScroll: (data: boolean) => void;
};

const InputAltura = ({ altura, setAltura, setScroll }: InputAlturaProps) => {
  const form = useForm<PostAlturaDto>({
    resolver: zodResolver(PostAlturaSchema),
    defaultValues: altura,
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async values => {
      const isValid = await form.trigger();
      console.log("Use effect component: isvalid", isValid);
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
        <FormField
          control={form.control}
          name="PostAltura.altura"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center justify-start">
                <FormLabel className="sr-only">Altura da Pallet</FormLabel>
                <FormControl>
                  <Input className="w-16" {...field} placeholder="..." />
                </FormControl>
                <span className="p-1">Altura em Mt</span>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default InputAltura;

/*


    <>
      <Input
        className="w-16 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        type="number"
        min={0}
        defaultValue={0}
      />
      <span className="p-1">Mt Altura</span>
    </>


*/
