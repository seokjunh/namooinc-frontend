"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "@/i18n/rounting";

interface NoticeDeleteButtonProps {
  postId: string;
}

const DeleteButton = ({ postId }: NoticeDeleteButtonProps) => {
  const router = useRouter();

  const deleteHandler = async () => {
    try {
      const response = await fetch(`http://localhost:8080/notice/${postId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/support/notice");
      } else {
        alert("게시물이 삭제되지 않았습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="rounded-lg bg-red-500 px-6 py-2 text-sm text-white hover:bg-red-500/90">
        삭제
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>게시물을 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 취소할 수 없습니다. 게시물은 영구적으로 삭제됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={deleteHandler}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteButton;
