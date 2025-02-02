"use client";

import { usePathname, useRouter } from "@/i18n/rounting";
import { post } from "@/lib/type";

interface NoticeListProps {
  posts: post[];
  totalPosts: number;
  currentPage: number;
  postPerPage: number;
}

const NoticeList = ({
  posts,
  totalPosts,
  currentPage,
  postPerPage,
}: NoticeListProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (id: string) => {
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
    <div>
      {posts.map((post, idx) => (
        <div key={post.id}>
          <div
            className="grid cursor-pointer grid-cols-5 border-b py-1 text-center text-xs hover:bg-gray-50 hover:shadow-md sm:grid-cols-10 sm:py-2 md:text-base lg:text-lg"
            onClick={() => handleClick(post.id)}
          >
            <div>{getNoticeNumber(idx)}</div>
            <div className="col-span-3 sm:col-span-7">{post.title}</div>
            <div className="sm:col-span-2">
              {getConvertDate(post.createdAt)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NoticeList;
