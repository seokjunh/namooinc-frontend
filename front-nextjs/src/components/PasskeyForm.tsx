"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useRef } from "react";
import { Input } from "./ui/input";

const FormSchema = z.object({
  passKey: z.string().min(10, {
    message: "패스키가 올바르지 않습니다.",
  }),
});

const PasskeyForm = () => {
  const InputRef = useRef<HTMLInputElement>(null);

  const sessionKey = process.env.NEXT_PUBLIC_SESSION_KEY;
  const sessionValue = process.env.NEXT_PUBLIC_SESSION_VALUE;

  useEffect(() => {
    if (InputRef.current) {
      InputRef.current.focus();
    }
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      passKey: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const passkey = data.passKey;

    if (passkey === process.env.NEXT_PUBLIC_NOTICE_PASS_KEY) {
      if (sessionKey && sessionValue) {
        sessionStorage.setItem(sessionKey, sessionValue);
      }
      window.location.reload();
    } else {
      alert("키값이 올바르지 않습니다.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="passKey"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" autoComplete="false" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default PasskeyForm;
