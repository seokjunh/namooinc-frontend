"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PasskeyForm from "./PasskeyForm";

const EditAuthButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex">
          <div className="text-xs md:text-base lg:text-lg text-gray-400">[편집]</div>
        </div>
      </DialogTrigger>
      <DialogContent className="mx-auto max-w-xs rounded-xl sm:max-w-[25rem]">
        <DialogHeader>
          <DialogTitle>Enter Passkey</DialogTitle>
          <DialogDescription>패스키를 입력해주세요.</DialogDescription>
        </DialogHeader>
        <PasskeyForm />
      </DialogContent>
    </Dialog>
  );
};

export default EditAuthButton;
