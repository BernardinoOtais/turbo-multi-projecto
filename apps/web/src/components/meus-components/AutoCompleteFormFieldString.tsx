"use client";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
} from "react-hook-form";
import { AutocompleteStringDto } from "@repo/types";
import { useState } from "react";

type AutoCompleteFormFieldStringProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  options: AutocompleteStringDto[];
  placeholder?: string;
  emptyMessage?: string;
  label?: string;
  disable?: boolean;
  largura?: string;
};

export function AutoCompleteFormFieldString<T extends FieldValues>({
  form,
  name,
  options,
  placeholder = "Escolha uma opção...",
  emptyMessage = "Não existe.",
  label,
  disable = false,
  largura = "w-[200px]",
}: AutoCompleteFormFieldStringProps<T>) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }: { field: ControllerRenderProps<T, Path<T>> }) => (
        <FormItem className="flex flex-col">
          {label && (
            <FormLabel
              className={cn(
                disable && "cursor-not-allowed opacity-50", // Styling when disabled
              )}
            >
              {label}
            </FormLabel>
          )}
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  disabled={disable}
                  className={cn(
                    "justify-between",
                    !field.value && "text-muted-foreground",
                    disable && "cursor-not-allowed opacity-50", // Styling when disabled
                    largura,
                  )}
                >
                  {field.value
                    ? options.find(opt => opt.value === field.value)?.label
                    : placeholder}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className={cn("p-0", largura)}>
              <Command>
                <CommandInput placeholder="Pesquisa..." disabled={disable} />
                <CommandList>
                  <CommandEmpty>{emptyMessage}</CommandEmpty>
                  <CommandGroup>
                    {options.map(option => (
                      <CommandItem
                        key={option.value}
                        disabled={disable}
                        value={option.label}
                        onSelect={() => {
                          form.setValue(
                            name,
                            option.value as PathValue<T, Path<T>>,
                          );
                          setIsPopoverOpen(false);
                        }}
                      >
                        {option.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            option.value === field.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
