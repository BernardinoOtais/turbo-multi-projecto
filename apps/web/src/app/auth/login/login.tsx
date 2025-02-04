"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginDto, LoginZ } from "@repo/types";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

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
import { login } from "@/lib/actions/auth";

const Login = () => {
  const form = useForm<LoginDto>({
    resolver: zodResolver(LoginZ),
    defaultValues: {
      nomeUser: "",
      password: "",
    },
  });

  const {
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginDto>({
    resolver: zodResolver(LoginZ),
  });

  const onSubmit = async (data: LoginDto) => {
    const response = await login(data);
    if (response) {
      Object.entries(response.error).forEach(([key, message]) => {
        setError(key as keyof LoginDto, {
          message: Array.isArray(message)
            ? message.join(", ")
            : String(message),
        });
      });
    }
  };

  return (
    // The HTML form element wraps the `Form` component
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <Form {...form}>
        {errors.message && (
          <FormMessage className="text-red-500">
            {errors.message.message}
          </FormMessage>
        )}
        <FormField
          control={form.control}
          name="nomeUser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Utilizador...</FormLabel>
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
                <Input {...field} placeholder="Password..." type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link className="text-sm underline" href="#">
          Forgot your password?
        </Link>
        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
        <div className="flex justify-between text-sm">
          <p> Don&apos;t have an account? </p>
          <Link className="text-sm underline" href="/auth/signup">
            Sign Up
          </Link>
        </div>
      </Form>
    </form>
  );
};

export default Login;
