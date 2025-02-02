import React from "react";
import NoticeWriteForm from "./NoticeWriteForm";

const NoticeWrite = () => {
  return (
    <div className="py-[6.25rem]">
      <div className="mb-b mb-[5rem] pt-16 text-center text-2xl font-bold underline underline-offset-[1rem] sm:text-4xl">
        글쓰기
      </div>
      <div className="mx-auto max-w-xs space-y-5 md:max-w-2xl lg:max-w-6xl">
        <NoticeWriteForm />
      </div>
    </div>
  );
};

export default NoticeWrite;
