"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

import { Label } from "./ui/label";
import Close from "../../public/svg/Close";
import { post } from "@/lib/type";
import DeleteButton from "./DeleteButton";
import { useRouter } from "@/i18n/rounting";

interface PatchNoticeProps {
  post: post;
}

interface FileItem {
  id: string;
  name: string;
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
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newFiles: FileItem[] = Array.from(selectedFiles).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileDelete = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const newPost = {
      ...data,
      files: files,
      updatedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(`http://localhost:8080/notice/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        alert("게시물이 수정되었습니다.");
        router.push("/support/notice");
      } else {
        alert("게시물이 수정되지 않았습니다.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-[6.25rem]">
      <div className="mb-b mb-[5rem] pt-16 text-center text-2xl font-bold underline underline-offset-[1rem] sm:text-4xl">
        수정하기
      </div>
      <div className="mx-auto max-w-xs space-y-5 md:max-w-2xl lg:max-w-6xl">
        <div className="flex justify-end">
          <DeleteButton postId={post.id} />
        </div>
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
                  <FormControl>
                    <Input placeholder="제목" {...field} />
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
                  <FormControl>
                    <Textarea
                      placeholder="내용을 입력하세요"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <div>
                <Label
                  className="cursor-pointer rounded bg-[#78b237] px-6 py-2 text-white transition-colors hover:bg-[#78b237]/90"
                  htmlFor="fileInput"
                >
                  파일 선택
                </Label>

                <Input
                  id="fileInput"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="border-[#78b237] text-[#78b237] hover:bg-[#78b237]/10"
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  className="bg-[#78b237] hover:bg-[#78b237]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "수정 중..." : "수정"}
                </Button>
              </div>
            </div>
            {files.length > 0 && (
              <div className="grid w-[15rem] grid-cols-2 gap-2 sm:w-[30rem]">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
                  >
                    <span className="max-w-[200px] truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => handleFileDelete(file.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Close />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NoticePatchForm;
