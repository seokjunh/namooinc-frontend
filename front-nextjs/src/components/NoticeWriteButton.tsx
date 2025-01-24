"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputOTPForm from "./InputOTPForm";

const NoticeWriteButton = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-xl bg-[#78b237] px-6 py-2 text-white hover:bg-[#78b237]/90">
        글쓰기
      </DialogTrigger>
      <DialogContent className="mx-auto flex max-w-xs flex-col items-start rounded-xl sm:max-w-[25rem]">
        <DialogHeader>
          <DialogTitle>Enter Passkey</DialogTitle>
          <DialogDescription>패스키를 입력해주세요.</DialogDescription>
        </DialogHeader>
        <InputOTPForm />
      </DialogContent>
    </Dialog>
  );
};

export default NoticeWriteButton;
