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

const NoticeEditButton = () => {
  return (
    <Dialog>
      <DialogTrigger className="rounded-lg bg-gray-300 px-6 py-2 text-sm text-white hover:bg-gray-300/90">
        편집
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter Passkey</DialogTitle>
          <DialogDescription>패스키를 입력해주세요.</DialogDescription>
        </DialogHeader>
        <InputOTPForm />
      </DialogContent>
    </Dialog>
  );
};

export default NoticeEditButton;
