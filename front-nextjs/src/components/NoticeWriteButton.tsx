"use client"

import { usePathname, useRouter } from "@/i18n/rounting";
import { Button } from "./ui/button";

const NoticeWriteButton = () => {
  const router = useRouter();
  const pathName = usePathname();
  const writeHandler = () => {
    router.push(`${pathName}/write`);
  };
  return (
    <Button
      className="bg-[#78b237] hover:bg-[#78b237]/90"
      onClick={writeHandler}
    >
      글쓰기
    </Button>
  );
};
export default NoticeWriteButton;
