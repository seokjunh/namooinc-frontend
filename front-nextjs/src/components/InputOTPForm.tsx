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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const FormSchema = z.object({
  passKey: z.string().min(10, {
    message: "패스키가 올바르지 않습니다.",
  }),
});

const InputOTPForm = () => {
  const router = useRouter();
  const pathName = usePathname();
  const locale = useLocale();
  const InputRef = useRef<HTMLInputElement>(null);

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
      const targetPath =
        pathName === `/${locale}/support/notice`
          ? `${pathName}/write`
          : `${pathName}/patch-notice`;

      router.push(targetPath);
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
                <InputOTP maxLength={10} {...field} ref={InputRef}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={1} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={2} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={3} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={4} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={5} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={6} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={7} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={8} className="w-[1.7rem] sm:w-9" />
                    <InputOTPSlot index={9} className="w-[1.7rem] sm:w-9" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default InputOTPForm;
