"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useRouter } from "@/i18n/rounting";
import NoticeFileForm from "./NoticeFileForm";
import { post } from "@/lib/type";


interface PatchNoticeProps {
  post: post;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: "제목을 입력해주세요.",
  }),
  content: z.string().min(1, {
    message: "제목을 입력해주세요.",
  }),
});

const NoticePatchForm = ({ post }: PatchNoticeProps) => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      const formData = new FormData();

      formData.append(
        "data",
        new Blob([JSON.stringify({ ...data })], { type: "application/json" }),
      );

      files.forEach((file) => {
        formData.append("files", file);
      });

      // const newPost = {
      //   ...data,
      //   // updatedAt: new Date().toISOString(),
      // };

      const response = await fetch(`http://localhost:8080/notice/${post.id}`, {
        method: "PATCH",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("게시물 등록에 실패했습니다.");
      }

      alert("게시물이 수정되었습니다.");
      router.push("/support/notice");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("게시물 수정이 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg border p-10 shadow-md"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">제목</FormLabel>
              <FormControl>
                <Input
                  placeholder="제목을 입력하세요."
                  {...field}
                  className="focus:border-[#78b237]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">내용</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="내용을 입력하세요."
                  rows={10}
                  {...field}
                  className="focus:border-[#78b237]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <NoticeFileForm
          files={files}
          setFiles={setFiles}
          isSubmitting={isSubmitting}
        />
      </form>
    </Form>
  );
};

export default NoticePatchForm;
