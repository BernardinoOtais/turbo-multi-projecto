"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CriaUserComValidacaoPassword,
  CriaUserComValidacaoPasswordDto,
} from "@repo/types";
import { CircleHelp, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { IconsMenus } from "@/components/dashboard/menus/menus-e-seus-tipos";
import { MultiSelect } from "@/components/meus-components/multi-select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { criarNovoUser } from "@/lib/actions/dashboard/administrador";

type NovoUserFormProps = {
  papeisKeyValue: {
    value: string;
    label: string;
  }[];
};
const NovoUserForm = ({ papeisKeyValue }: NovoUserFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const form = useForm<CriaUserComValidacaoPasswordDto>({
    resolver: zodResolver(CriaUserComValidacaoPassword),
    defaultValues: {
      nomeUser: "",
      nome: "",
      apelido: "",
      email: "",
      password: "",
      confirmPassword: "",
      papeis: [],
    },
  });

  const {
    formState: { isSubmitting },
    reset,
  } = form;

  const papeis = papeisKeyValue.map(papel => ({
    value: papel.value,
    label: papel.label,
    icon: IconsMenus[papel.label as keyof typeof IconsMenus] || CircleHelp,
  }));

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const onSubmit = (data: CriaUserComValidacaoPasswordDto) => {
    criarNovoUser(data)
      .then(resultado => {
        if (!resultado.success)
          toast.error(`Erro ao actulizar...`, {
            description: resultado.error,
          });

        /*
        const respostaRecebida = RespostaSchema.safeParse(resultado.data.data);
        if (respostaRecebida.success)
          toast.info(
            respostaRecebida.data.successMessage || `Partes actualizadas...`,
            {
              description: "Sucesso",
            },
          );
          */
      })
      .catch(error => console.error(error))
      .finally(() => reset());

    /*
      const response = await login(data);
      if (response) {
        Object.entries(response.error).forEach(([key, message]) => {
          setError(key as keyof CriaUserComValidacaoPasswordDto, {
            message: Array.isArray(message)
              ? message.join(", ")
              : String(message),
          });
        });
      }
        */
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome...</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nome.." autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apelido"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apelido...</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Apelido.." autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email...</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email.."
                  type="email"
                  autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nomeUser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name...</FormLabel>
              <FormControl>
                <Input {...field} placeholder="User Name..." autoFocus />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password...</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Password..."
                    type={showPassword ? "text" : "password"}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirma Password...</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    placeholder="Confirma Password..."
                    type={showPasswordConfirm ? "text" : "password"}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setShowPasswordConfirm(prev => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="papeis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Papeis...</FormLabel>
              <MultiSelect
                options={papeis}
                onValueChange={values => {
                  setSelectedFrameworks(values); // Update local state
                  field.onChange(values, { shouldValidate: true }); // Update form state
                }}
                defaultValue={selectedFrameworks}
                placeholder="Papeis do Utilizador..."
                variant="inverted"
                animation={0}
                maxCount={3}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "A Criar..." : "Novo Utilizador"}
        </Button>
      </Form>
    </form>
  );
};

export default NovoUserForm;
