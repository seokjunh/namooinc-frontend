"use client";

import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "@/i18n/rounting";
import NoticeFileForm from "./NoticeFileForm";
import { Button } from "./ui/button";
import Close from "../../public/svg/Close";

const formSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  content: z.string().min(1, "내용을 입력해주세요."),
});

const NoticeWriteForm = () => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileDelete = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
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

      const response = await fetch("http://localhost:8080/notice/create", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("게시물 등록에 실패했습니다.");
      }

      alert("게시물이 등록되었습니다.");
      router.push("/support/notice");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("게시물 등록이 실패했습니다.");
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
        <div className="flex items-center justify-between">
          <NoticeFileForm setFiles={setFiles} />
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
              {isSubmitting ? "등록 중..." : "등록"}
            </Button>
          </div>
        </div>
        {files.length > 0 && (
          <div className="grid w-[15rem] grid-cols-2 gap-2">
            {files.map((file, idx) => (
              <div
                key={idx}
                className="flex gap-2 rounded-full border px-3 py-1 text-sm"
              >
                <div className="truncate">{file.name}</div>
                <button
                  type="button"
                  onClick={() => handleFileDelete(file.name)}
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
  );
};

export default NoticeWriteForm;
