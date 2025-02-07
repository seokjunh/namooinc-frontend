"use client";

import { usePathname, useRouter } from "@/i18n/rounting";
import { post } from "@/lib/type";

interface ContentProps {
  post: post;
  idx: number;
  totalPosts: number;
  currentPage: number;
  postPerPage: number;
}

const PostContent = ({
  post,
  idx,
  totalPosts,
  currentPage,
  postPerPage,
}: ContentProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (id: number) => {
    router.push(`${pathName}/${id}`);
  };

  const getNoticeNumber = (idx: number) => {
    const no = totalPosts - postPerPage * (currentPage - 1) - idx;
    return no;
  };

  const getConvertDate = (createdAt: string) => {
    const date = createdAt.split("T")[0].split("-").join(".");
    return date;
  };
  return (
    <div
      className="grid cursor-pointer border-b py-1 text-center text-xs hover:bg-gray-50 hover:shadow-md grid-cols-12 sm:py-2 md:text-base lg:text-lg"
      onClick={() => handleClick(post.id)}
    >
      <div className="col-span-1">{getNoticeNumber(idx)}</div>
      <div className="col-span-9 xs:pl-[4.5rem] pl-[1.5rem]">{post.title}</div>
      <div className="col-span-2">{getConvertDate(post.createdAt)}</div>
    </div>
  );
};
export default PostContent;
