"use client";

import { Button } from "./ui/button";
import { post } from "@/lib/type";
import FileCarousel from "./FileCarousel";
import NoticeEditButton from "./NoticeEditButton";
import { useRouter } from "@/i18n/rounting";
import SessionCheck from "./SessionCheck";

interface NoticeDetailProps {
  post: post;
}

const NoticeDetail = ({ post }: NoticeDetailProps) => {
  const router = useRouter();

  const ToNoticeHandler = () => {
    router.push("/support/notice");
  };

  const getConverDateTime = (createAt: string) => {
    const date = createAt.split("T")[0].split("-");
    const formattedDate = `${date[0]}년 ${date[1]}월 ${date[2]}일`;
    const time = createAt.split("T")[1].slice(0, 5);

    return [formattedDate, time].join(" ");
  };

  return (
    <div className="py-[6.25rem]">
      <div className="mx-auto max-w-xs md:max-w-2xl mt-16">
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="text-3xl font-bold">{post.title}</div>
            <div className="flex space-x-2 text-gray-500">
              <div>관리자</div>
              <div>/</div>
              <div className="">{getConverDateTime(post.createdAt)}</div>
            </div>
          </div>
          <div className="border"></div>
          <div className="space-y-6">
            <div className="space-y-10">
              {post.files && post.files?.length > 0 ? (
                <FileCarousel files={post.files} />
              ) : (
                ""
              )}
              <div className="min-h-[10rem] whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <SessionCheck>
                <NoticeEditButton />
              </SessionCheck>
              <Button
                type="button"
                onClick={ToNoticeHandler}
                className="rounded-lg bg-[#78b237] px-6 py-3 text-white hover:bg-[#78b237]/90"
              >
                목록
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
